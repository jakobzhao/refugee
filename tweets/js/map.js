d3.select(window).on("resize", sizeChange);
    
    var svg = d3.select("div#container").append("svg").attr("width", "100%").append("g");
    var projection = d3.geoNaturalEarth1().scale(190).center([10,40]);
    var path = d3.geoPath().projection(projection);
    var worldmap = d3.json("../assets/continents.geojson");
   
Promise.all([worldmap]).then(function(values){    
 // draw map
    svg.selectAll("path")
        .data(values[0].features)
        .enter()
        .append("path")
        .attr("class","continent")
        .attr("d", path)
        .on("mouseover", function(d) {
            d3.select(this).attr("r", 10).style("fill", "#5200ff");
            })                  
        .on("mouseout", function(d) {
            d3.select(this).attr("r", 5.5).style("fill", "#f0e4dd");
            });
        
    }); 
function sizeChange() {
	    d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
	    $("svg").height($("#container").width()*0.618);
	}