function wc1(){
    $("canvas#washChart").remove();
    $("div#facts_3").append('<canvas id="washChart"width="auto" height="400px"></canvas>');
    Chart.defaults.global.defaultFontFamily = "Roboto Condensed";
    var ctx = document.getElementById('washChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Piped Water', 'Tubewells/Handpump', 'Protected Dugwell', 'Surface Water'],
            datasets: [{
                
                data: [11, 86, 2, 1],
                backgroundColor: [                    
                    'rgba(237, 248, 251, 0.7)',
                    'rgba(173,216,230, 0.7)',
                    'rgba(136, 65, 157, 0.7)',
                    'rgba(140, 150, 198, 0.7)'
                ],
                borderColor: [
                    'rgba(237, 248, 251, 1)',
                    'rgba(173,216,230, 1)',
                    'rgba(136, 65, 157, 1)',
                    'rgba(140, 150, 198, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 18,
                fontColor: 'white',
                fontFamily : "Roboto Condensed",
                padding: 25,
                text: 'Primary drinking water source'
            },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                        }
                    }
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    
                }
            }
                                            
        }
    });
}

    function wc2(){
        $("canvas#washChart").remove();
        $("div#facts_3").append('<canvas id="washChart" width="auto" height="300px"></canvas>');
        var ctx = document.getElementById('washChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Water source is too far', 'Water tastes bad', 'Path to water source is too steep', 'The source is only available some times of the day ', 'Water does not look clean', 'Going to the source/collecting water is dangerous', 'Water smells bad'],
                datasets: [{
                    
                    data: [19, 10, 7, 7, 6, 4, 4],
                    backgroundColor: [
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',                     
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)'
                    ],
                    borderColor: [
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',                   
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 18,
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                    padding: 25,
                    text: 'Problems related to access to water'
                },
                tooltips: {
                    callbacks: {
                        title: function() {},
                        label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        display: false //this will remove all the x-axis grid lines
                    }],
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '%';
                            },
                            fontColor: 'white',
                            fontFamily : "Roboto Condensed",
                        }
                    }]
                },
                    legend: {
                        display: false,
                    },
            }
        });
    }


    function wc3(){
        $("canvas#washChart").remove();
        $("div#facts_3").append('<canvas id="washChart" width="auto" height="300px"></canvas>');
        var ctx = document.getElementById('washChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['< 10 min', '< 15 min', '< 20 min', '< 25 min', '< 30 min', '> 30 min'],
                datasets: [{
                    
                    data: [67, 15, 7, 6, 3, 2],
                    backgroundColor: [
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)',                        
                        'rgba(179, 205, 227, 0.7)',
                        'rgba(179, 205, 227, 0.7)'     
                    ],
                    borderColor: [
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',                   
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 18,
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                    padding: 25,
                    text: 'Time required for one water collection journey'
                },
                tooltips: {
                    callbacks: {
                        title: function() {},
                        label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '%';
                            }, 
                            fontColor: 'white',
                            fontFamily : "Roboto Condensed"
                        }
                        
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true, 
                            fontColor: 'white',
                            fontFamily : "Roboto Condensed"
                        }
                    }]
                },
                    legend: {
                        display: false,
                    },
            }
        });
    }

    function wc4(){
        $("canvas#washChart").remove();
        $("div#facts_3").append('<canvas id="washChart" width="auto" height="300px"></canvas>');
        var ctx = document.getElementById('washChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Latrine is not safe', 'Too many people using latrines', 'Latrine is not clean', 'Not private (i.e. people can see inside)', 'Bad smell/many flies', 'Latrine is too far away', 'Open defecation around latrines', 'Insufficient water at the latrines', 'No separation between men and women', 'No lighting', 'Route to the latrine is not safe'],
                datasets: [{
                    
                    data: [11, 10, 10, 10, 10, 6, 4, 4, 3, 3, 2],
                    backgroundColor: [
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',                      
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',                      
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)',
                        'rgba(179, 205, 227, 0.5)'
                    ],
                    borderColor: [
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',                   
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',
                        'rgba(179, 205, 227, 0.9)',                   
                        'rgba(179, 205, 227, 0.9)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 18,
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                    padding: 25,
                    text: 'Problems related to access to latrines'
                },
                tooltips: {
                    callbacks: {
                        title: function() {},
                        label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        display: false //this will remove all the x-axis grid lines
                    }],
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '%';
                            },
                            fontColor: 'white',
                            fontFamily : "Roboto Condensed",
                        }
                    }]
                },
                    legend: {
                        display: false,
                    },
            }
        });
    }

