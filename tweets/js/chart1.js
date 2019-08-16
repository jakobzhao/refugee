var count = [
    22,
    21, 
    17,
    16,    
    10,   
    ]


var barChartData = {
labels: ['migrant','people', 'dead', 'help', 'world'],
datasets: [{
    label: 'Frequency',
    backgroundColor: window.chartColors.green,
    stack: 'Stack 0',
    data: count,
    fontFamily: 'Lustria'
}]

};

var ctx = document.getElementById('canvas').getContext('2d');
window.myBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'Most used words in today\'s tweets',
            fontFamily: 'Lustria'
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
            intersect: true,
            fontFamily: 'Lustria'
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

