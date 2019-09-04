d3.select(window).on("load", sizeChange, colorChange);
d3.select(window).on("resize", sizeChange);
    
    var svg = d3.select("div#container").append("svg").attr("width", "90%").append("g");
    var projection = d3.geoNaturalEarth1().scale(190).center([0,40]);
    var path = d3.geoPath().projection(projection);
    var worldmap = d3.json("assets/continents.geojson");
    var value = document.title;;
Promise.all([worldmap]).then(function(values){    
 // draw map
    svg.selectAll("path")
        .data(values[0].features)
        .enter()
        .append("path")
        .attr("class","continent")
        .attr("d", path)
        .on("mouseover", function(d) {
            d3.select(this).attr("r", 10).style("fill", "rgba(255, 148, 120, .5)");
            })                  
        .on("mouseout", function(d) {
            if (d.properties.CONTINENT != value){
            d3.select(this).attr("r", 5.5).style("fill", "#f0e4dd");
            }})
        .style("fill", function(d) {        
            if (d.properties.CONTINENT == value) {
            //If value exists…
            return "rgba(255, 148, 120, .5)";
            } else {
            //If value is undefined…
            return "#f0e4dd";
            }
            })
            .on('click', function(d) {
                //console.log('open tab')
                window.open(
                  d.properties.CONTINENT + '.html',
                 '_parent'  // <- This is what makes it open in a new window.
                );
            });       

        
    }); 
function sizeChange() {
	    d3.select("g").attr("transform", "scale(" + $("#container").width()/1100 + ")");
	    $("svg").height($("#container").width()*0.618);
    }

function colorChange() {
	    d3.select("svg").style("fill", function(d){
            if(path.continent =="Europe"){
              return "brown"
            } else { 
              return "green" }
          })             
    }