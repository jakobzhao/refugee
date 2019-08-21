var count =[]

$.getJSON("assets/asia/sentiment.json", function() {
  
}).then(function(data) {

  $.each( data, function(i) {
      count.push(data[i]);
    });
Chart.defaults.global.defaultFontFamily = "Lustria";
var ctx = document.getElementById('canvas2').getContext("2d");

var myChart = new Chart(ctx, {
    plugins: [
    {
      id: "responsiveGradient",
      afterLayout: function(chart, options) {
        var scales = chart.scales;
        // create a linear gradient with the dimentions of the scale
        var color = chart.ctx.createLinearGradient(
          scales["x-axis-0"].left,
          scales["y-axis-0"].bottom,
          scales["x-axis-0"].right,
          scales["y-axis-0"].top
        );
        // add gradients stops
        color.addColorStop(0, "#f49080");
        color.addColorStop(0.49, "#ffffff");
        color.addColorStop(1, "#80b6f4");
        // changes the background color option
        chart.data.datasets[0].backgroundColor = color;
      }
    }
  ],
    type: 'line',
    data: {
        labels: ['-1', '-0.8', '-0.6', '-0.4', '-0.2', '0', '+0.2', '+0.4', '+0.6', '+0.8', '+1'],
        datasets: [{
            label: "Tweets",
            data: count
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Distribution of Tweets based on Sentiment Polarity (-1 = negative +1 = positive)'
            
        },
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
})
});