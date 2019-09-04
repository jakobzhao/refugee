var tweets = []

$.getJSON("assets/europe/pics.json", function() {
  
}).then(function(data) {

  $.each( data, function(i) {
    tweets.push(data[i]);
    });
(function ( $ ) {

  $('#photocols').photocols({
    colswidth : 180,
    height : 800,
    bgcolor : '#fff',
    opacity: 0.3,
    gap: 2,
    data: tweets
  });

}( jQuery ))
});