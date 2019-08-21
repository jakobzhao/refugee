var items = [];
var labels = [];
$.getJSON("assets/africa/list.json", function() {
    
  }).then(function(data) {

    $.each( data, function( key, val ) {
        labels.push(key);
        items.push(val );
      });

Chart.defaults.global.defaultFontFamily = "Lustria";
//var count = [22, 21, 17, 16, 10,]
var ctx = document.getElementById('canvas').getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
purple_orange_gradient.addColorStop(0, 'rgba(22, 160, 133, 0.7)');
purple_orange_gradient.addColorStop(1, 'rgba(245, 229, 27, 0.7)');
var barChartData = {
//labels: ['migrant','people', 'dead', 'help', 'world'],
labels: labels,
datasets: [{
    label: 'Frequency',
    fontFamily: 'Lustria',
    backgroundColor: purple_orange_gradient,
	hoverBackgroundColor: purple_orange_gradient,
	hoverBorderWidth: 2,
	hoverBorderColor: 'rgba(22, 160, 133, 0.3)',
    stack: 'Stack 0',
    data: items,
    
}]
};
window.myBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'Most frequent words'
        },
        layout: {
            padding: {
                left: 10,
                right: 60,
                top: 10,
                bottom: 10
            }
        },
        tooltips: {
            mode: 'index',
            intersect: true
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                // barThickness: 50,
            }]
        }
    }
});
});