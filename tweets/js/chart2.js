var count = [
    1,
    0,
    2,
    18,
    7,
    45,
    21,
    18,
    11,
    3,
    1
    ]


var sentimentChartData = {
labels: ['-1', '-0.8', '-0.6', '-0.4', '-0.2', '0', '+0.2', '+0.4', '+0.6', '+0.8', '+1'],
datasets: [{
    label: 'Tweets',
    fontFamily: 'Lustria',
    backgroundColor: Samples.utils.transparentize(window.chartColors.blue),
    stack: 'Stack 0',
    data: count
}]

};

var ctx2 = document.getElementById('canvas2').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: sentimentChartData,
    options: {
        title: {
            display: true,
            text: 'Distribution of Tweets based on Sentiment Polarity (-1 = negative +1 = positive)',
            fontFamily: 'Lustria'
        },
        layout: {
            padding: {
                left: 20,
                right: 50,
                top: 10,
                bottom: 40
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
                //barThickness: 20,
            }]
        }
    }
});

