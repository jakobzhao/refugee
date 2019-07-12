Papa.parse('data/flows.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      var geoJsonFeatureCollection = {
        type: 'FeatureCollection',
        features: results.data.map(function(datum) {
          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              radius: 12,
              coordinates: [datum.s_lon, datum.s_lat]
            },
            properties: datum
          }
        })
      };

      var oneToManyFlowmapLayer = L.canvasFlowmapLayer(geoJsonFeatureCollection, {
        originAndDestinationFieldIds: {
            originUniqueIdField: 'Origin',
            originGeometry: {
              x: 'Orig_x',
              y: 'Orig_y'
            },
            destinationUniqueIdField: 'Destination',
            destinationGeometry: {
              x: 'Dest_x',
              y: 'Dest_y'
            }
          },
          canvasBezierStyle: {
            type: 'classBreaks',
            field: 'Population',
            classBreakInfos: [{
              classMinValue: 0,
              classMaxValue: 1000,
              symbol: {
                strokeStyle: '#0471A6',
                lineWidth: 0.5,
                lineCap: 'round',
                shadowColor: '#0471A6',
                shadowBlur: 1.5
              }
            }, {
              classMinValue: 1000,
              classMaxValue: 10000,
              symbol: {
                strokeStyle: '#0471A6',
                lineWidth: 3,
                lineCap: 'round',
                shadowColor: '#0471A6',
                shadowBlur: 1.5
              }
            }, {
              classMinValue: 10000,
              classMaxValue: 100000,
              symbol: {
                strokeStyle: '#0471A6',
                lineWidth: 9,
                lineCap: 'round',
                shadowColor: '#0471A6',
                shadowBlur: 1.5
              }
            }, {
                classMinValue: 100000,
                classMaxValue: 500000,
                symbol: {
                  strokeStyle: '#0471A6',
                  lineWidth: 15,
                  lineCap: 'round',
                  shadowColor: '#ff22',
                  shadowBlur: 1.5
                }
              }, {
                classMinValue: 500000,
                classMaxValue: 10000000,
                symbol: {
                  strokeStyle: '#0471A6',
                  lineWidth: 20,
                  lineCap: 'round',
                  shadowColor: '#ff22',
                  shadowBlur: 1.5,
                  stroke: 0.5
                }
              }],
            // the layer will use the defaultSymbol if a data value doesn't fit
            // in any of the defined classBreaks
            defaultSymbol: {
              strokeStyle: '#000000',
              lineWidth: 5,
              lineCap: 'round',
              shadowColor: '#e7e1ef',
              shadowBlur: 1.5,
              pane: 'flow'
            },
          },
          pathDisplayMode: 'selection',
          animationStarted: false,
         
        }).addTo(map);

      // since this demo is using the optional "pathDisplayMode" as "selection",
      // it is up to the developer to wire up a click or mouseover listener
      // and then call the "selectFeaturesForPathDisplay()" method to inform the layer
      // which Bezier paths need to be drawn
      oneToManyFlowmapLayer.on('mouseover', function(e) {
        if (e.sharedOriginFeatures.length) {
          oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedOriginFeatures, 'SELECTION_NEW');
        }
        // if (e.sharedDestinationFeatures.length) {
        //   oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedDestinationFeatures, 'SELECTION_NEW');
        // }
      });
      // immediately select an origin point for Bezier path display,
      // instead of waiting for the first user click event to fire
      //oneToManyFlowmapLayer.selectFeaturesForPathDisplayById('s_city_id', 562, true, 'SELECTION_NEW');
    }
  });