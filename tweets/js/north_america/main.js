var tweets = []

$.getJSON("assets/north_america/pics.json", function() {
  
}).then(function(data) {

  $.each( data, function(i) {
    tweets.push(data[i]);
    });
(function ( $ ) {

  $('#photocols').photocols({
    colswidth : 180,
    height : 1400,
    bgcolor : '#fff',
    opacity: 0.3,
    gap: 2,
    data: tweets
  });

}( jQuery ))
});