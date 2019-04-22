import math
import pandas as pd
from geojson import FeatureCollection
from qgis.core import *


input_data = '..\\data\\SYRMDM_Oct2015-Mar2017.csv'
output_json_lines = '..\\data\\preprocessing\\' + input_data[10:-4] + '_lines.json'
output_json_points_o = '..\\data\\preprocessing\\' + input_data[10:-4] + '_points_o.json'
output_json_points_d = '..\\data\\preprocessing\\' + input_data[10:-4] + '_points_d.json'
output_geojson_lines = '..\\data\\processed\\' + input_data[10:-4] + '_lines.geojson'
output_geojson_points_o = '..\\data\\processed\\' + input_data[10:-4] + '_points_o.geojson'
output_geojson_points_d = '..\\data\\processed\\' + input_data[10:-4] + '_points_d.geojson'

df = pd.read_csv(input_data)

dtm_points_o = []
dtm_points_d = []
dtm_lines = []

steps = {
    '2015-10': 0,
    '2015-11': 1,
    '2015-12': 2,
    '2016-01': 3,
    '2016-02': 4,
    '2016-03': 5,
    '2016-04': 6,
    '2016-05': 7,
    '2016-06': 8,
    '2016-07': 9,
    '2016-08': 10,
    '2016-09': 11,
    '2016-10': 12,
    '2016-11': 13,
    '2016-12': 14,
    '2017-01': 15,
    '2017-02': 16,
    '2017-03': 17,
}

for index, row in df.iterrows():
    month_str, year = row['snapshotDate'].split('/')
    if month_str == 'January':
        month = '01'
    elif month_str == 'February':
        month = '02'
    elif month_str == 'March':
        month = '03'
    elif month_str == 'April':
        month = '04'
    elif month_str == 'May':
        month = '05'
    elif month_str == 'June':
        month = '06'
    elif month_str == 'July':
        month = '07'
    elif month_str == 'August':
        month = '08'
    elif month_str == 'September':
        month = '09'
    elif month_str == 'October':
        month = '10'
    elif month_str == 'November':
        month = '11'
    else:  # December
        month = '12'
    timestamp = year + '-' + month  # date in format yyyy-mm
    step = steps[timestamp]
    try:  # admin3
        o, d = row['idpArrivedFromAdmin3'], row['admin3']  # origin, destination name
        o_x, o_y = row['idpArrivedFromAdmin3Lng'], row['idpArrivedFromAdmin3Lat']  # origin longitude, latitude
        d_x, d_y = row['admin3Lng'], row['admin3Lat']  # destination longitude, latitude
    except:
        try:  # admin2
            o, d = row['idpArrivedFromAdmin2'], row['admin2']  # origin, destination name
            o_x, o_y = row['idpArrivedFromAdmin2Lng'], row['idpArrivedFromAdmin2Lat']  # origin longitude, latitude
            d_x, d_y = row['admin2Lng'], row['admin2Lat']  # destination longitude, latitude
        except:
            try:  # admin1
                o, d = row['idpArrivedFromAdmin1'], row['admin1']  # origin, destination name
                o_x, o_y = row['idpArrivedFromAdmin1Lng'], row[
                    'idpArrivedFromAdmin1Lat']  # origin longitude, latitude
                d_x, d_y = row['admin1Lng'], row['admin1Lat']  # destination longitude, latitude
            except:
                continue
    try:
        hh, ind = int(row['idpArrivedTotalHH']), int(row['idpArrivedTotalInd'])  # households, individuals
    except:
        continue

    if not math.isnan(o_x) and not math.isnan(d_x):
        dtm_point_o = {
            "type": "Feature",
            "properties": {
                "time": timestamp,
                "step": step,
                "month": month_str,
                "year": year,
                "o": o,
                "d": d,
                "hh": hh,
                "ind": ind
            }, "geometry": {
                "type": "Point",
                "coordinates": [o_x, o_y]
            }
        }
        dtm_points_o.append(dtm_point_o)

        dtm_point_d = {
            "type": "Feature",
            "properties": {
                "time": timestamp,
                "step": step,
                "month": month_str,
                "year": year,
                "o": o,
                "d": d,
                "hh": hh,
                "ind": ind
            }, "geometry": {
                "type": "Point",
                "coordinates": [d_x, d_y]
            }
        }
        dtm_points_d.append(dtm_point_d)

        dtm_line = {
            "type": "Feature",
            "properties": {
                "time": timestamp,
                "step": step,
                "month": month_str,
                "year": year,
                "o": o,
                "d": d,
                "hh": hh,
                "ind": ind
            }, "geometry": {
                "type": "LineString",
                "coordinates": [[o_x, o_y], [d_x, d_y]]
            }
        }
        dtm_lines.append(dtm_line)
    else:
        continue

collection_lines = FeatureCollection(dtm_lines)
collection_points_o = FeatureCollection(dtm_points_o)
collection_points_d = FeatureCollection(dtm_points_d)
print(dtm_lines)

with open(output_json_lines, 'w') as f:
    f.write('%s' % collection_lines)

with open(output_json_points_o, 'w') as f:
    f.write('%s' % collection_points_o)

with open(output_json_points_d, 'w') as f:
    f.write('%s' % collection_points_d)

# Create a reference to the QGIS Application
qgs = QgsApplication([], False)

# Load QGIS
qgs.initQgis()

inputs = [output_json_lines, output_json_points_o, output_json_points_d]
outputs = [output_geojson_lines, output_geojson_points_o, output_geojson_points_d]

for i in range(len(inputs)):

    # Load data into QGIS
    infile = inputs[i]  # path to json file
    vlayer = QgsVectorLayer(infile, 'vlayer', 'ogr')
    QgsMapLayerRegistry.instance().addMapLayer(vlayer)

    # Check if data loaded OK
    if vlayer.isValid():
        print('Converting to GeoJSON in QGIS...')
    else:
        print('Problem loading layer into QGIS')

    crs = QgsCoordinateReferenceSystem('epsg:4326')

    # Save memory layer to file
    error = QgsVectorFileWriter.writeAsVectorFormat(vlayer, outputs[i], 'UTF-8', crs, 'GeoJSON')

    if error == QgsVectorFileWriter.NoError:
        print('GeoJSON file successfully created from JSON.')

# When your script is complete, call exitQgis() to remove the provider and layer registries from memory
qgs.exitQgis()

print('Complete!')
