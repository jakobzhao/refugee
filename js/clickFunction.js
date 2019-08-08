(function($) {
	
	$.fn.clickFunction = function(options){
	
		var defaults = {
				buttonFunctions: null,//button selection
				buttonLabels: null, //button divs
				selected: null, //initial selected button
				//legend:'leg_1',//initial legend
				//elements:[],//initial additional HTML elements
				//initLayers:[],//initial geospatial layers
				titleContainer:'dataType',//div ID for dropdown title
				legendUpdate:false,//when legend update is false, legends need to be created in separate DIVs. If it is true, only one legend is necessary, and it will updated dynamically as the data changes. Only use the second option when there are a LOT (8+) datasets in a single map
				//objects for dynamic legend update: true
				legendColorDivs:['leg5_block','leg4_block','leg3_block','leg2_block','leg1_block',],//css IDs for legend colors
				legendValueDivs:['leg5_value','leg4_value','leg3_value','leg2_value','leg1_value'],//css IDs for legend labels
				descriptionDiv:'description',//css ID for data description in legend
				legendTitleDiv:'title', //css ID for data title in legend
				imageDiv:'iconImage',//css ID for icon image in legend
				///////////////////////////////////////////////////////
			};
				
		var funcSettings = $.extend(defaults, options);
				
		var buttonArray = [];
		
		for (var key in funcSettings.buttonFunctions) {
    		if (funcSettings.buttonFunctions.hasOwnProperty(key)) {
      			buttonArray.push(funcSettings.buttonFunctions[key]);  
    		}
		}
				
		for(let i = 0; i < funcSettings.buttonLabels.length; i++) {
  			$(funcSettings.buttonLabels[i]).click( function(){
    			buttonFunction(buttonArray[i]);
    			funcSettings.selected = buttonArray[i];
  			});
		}
		
		function buttonFunction(options) {
	
			var defaults = {
				button: 'but1', //button selection
				newLayers: null, //geoJson, topoJson, or WMS tile layers to be added when the button is selected
				topoLayers:null, //topoJson layers present in selection, used with topoHandler to update layer style
				topoHandler:null, //update topoJson styling
				colors:[], //update colors when re-styling an existing layer
				values:[], //update data values when re-styling existing layers
				variable: null, //the indicator for which dataset is displaying
				newElements: null, //additional HTML elements that need to be added
				title: null, //dropdown menu title
				newLegend: null, //legend div for selection
				///////////////objects for dynamic legend/////////////////
				legendValue:[], //array of legend values, to be stored in legendValueDivs
				legendDescription:null, //data description in legend, to be stored in descriptionDiv
				legendTitle:null,//data title in legend, to be stored in legendTitleDiv
				imageSRC:null,//image SRC in legend, to be stored in imageDiv
				//////////////////////////////////////////////////////////
				layerFunction: function(){console.log('layerFunction is default');}, //any additional functions to run on selection added here
				layerFunctionTop: function(){console.log('layerFunction is default');}
			};
		
			var settings = $.extend(defaults, options);
			
			if (settings.layerFunctionTop){
				settings.layerFunctionTop();
			}
			
			//highlight selected button
			if (settings.button){
				document.getElementById(funcSettings.selected.button).style.background = "rgba(242, 242, 242, 0.2)";
				document.getElementById(settings.button).style.background = "rgba(242, 242, 242, 1)";
			}
			//update dropdown menu title
			if (settings.title){
				document.getElementById(funcSettings.titleContainer).innerHTML = settings.title;
			}
			//update color values for data display 
			if (settings.colors){
				for (i = 0; i < settings.colors.length; i++){
					colorValue[i] = settings.colors[i];
				}
			}
			//update data values for data display
			if (settings.values){
				for (i = 0; i < settings.values.length; i++){
					dataValue[i] = settings.values[i];
				}
			}
			//update data variable
			if (settings.variable){
				data = settings.variable;
			}
			//remove old layers
			if (funcSettings.selected.newLayers){
				for (i = 0; i < funcSettings.selected.newLayers.length; i++){
					map.removeLayer(funcSettings.selected.newLayers[i]);
				}
			}
			//add new layers
			if (settings.newLayers){
				for (i = 0; i < settings.newLayers.length; i++){
					map.addLayer(settings.newLayers[i]);
					//funcSettings.initLayers.push(settings.newLayers[i]);
				}
			}
			//update topoJson layers
			if (settings.topoLayers){
				for (i = 0; i < settings.topoLayers.length; i++){
					settings.topoLayers[i].eachLayer(settings.topoHandler[i]);
				}
			}
			//legend update
			if (funcSettings.legendUpdate == false){ //replace old legend with selected legend 
				
				if (funcSettings.selected.newLegend){
					document.getElementById(funcSettings.selected.newLegend).style.display = "none";
				}
				if (settings.newLegend){
					document.getElementById(settings.newLegend).style.display = "block";
					//funcSettings.legend = settings.newLegend;
				}
			}
			else {
				//dynamically update legend based on current paramenters
				if (settings.legendValue){
					for (i = 0; i < settings.legendValue.length; i++){
						document.getElementById(funcSettings.legendValueDivs[i]).innerHTML = settings.legendValue[i];
					}
				}
				if (settings.colors){
					for (i = 0; i < settings.colors.length; i++){
						document.getElementById(funcSettings.legendColorDivs[i]).style.background = settings.colors[i];
					}
				}
				if (settings.legendDescription){
					document.getElementById(funcSettings.descriptionDiv).innerHTML = settings.legendDescription;
				}
				if (settings.legendTitle){
					document.getElementById(funcSettings.legendTitleDiv).innerHTML = settings.legendTitle;
				}
				if (settings.imageSRC){
					document.getElementById(funcSettings.imageDiv).src = settings.imageSRC;
				}
			}
			//remove old additional HTML elements
			if (funcSettings.selected.newElements){
				for (i = 0; i < funcSettings.selected.newElements.length; i++){
					document.getElementById(funcSettings.selected.newElements[i]).style.display = "none";
				}
			}
			//add new additional HTML elements
			if (settings.newElements){
				/*for (i = 0; i < settings.newElements.length; i++){
					funcSettings.elements.push(settings.newElements[i]);
				}*/
				for (i = 0; i < settings.newElements.length; i++){
					document.getElementById(settings.newElements[i]).style.display = "block";
				}
			}
			//run layer function
			if (settings.layerFunction){
				settings.layerFunction();
			}
			
			//resizeMiddle();
		
		}

		
	}
})(jQuery);