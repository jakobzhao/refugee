// var words = [
//   {text: "Lorem", weight: 13},
//   {text: "Ipsum", weight: 10.5},
//   {text: "Dolor", weight: 9.4},
//   {text: "Sit", weight: 8},
//   {text: "Amet", weight: 6.2},
//   {text: "Consectetur", weight: 5},
//   {text: "Adipiscing", weight: 5},
//   /* ... */
// ];

// $('#cloud').jQCloud(words);

var words = []

$.getJSON("assets/north_america/cloud.json", function() {
  
}).then(function(data) {

  $.each( data, function(i) {
      words.push(data[i]);
    });
$('#cloud').jQCloud(words)
  })
