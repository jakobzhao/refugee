function sc1(){
    $("canvas#safetyChart").remove();
    $("div#facts_2").append('<canvas id="safetyChart"width="auto" height="400px"></canvas>');
    Chart.defaults.global.defaultFontFamily = "Roboto Condensed";
    var ctx = document.getElementById('safetyChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Language and communication','Flooding, landslides, and cyclones', 'Access to other camps and mobility', 'Safe shelters', 'Access to safe drinking water', 'Humanitarian distributions','Health', 'Fuel', 'Education', 'Hygiene and sanitation', 'Lights and electricity', 'Safety and security'],
            datasets: [{
                
                data: [ Math.round(11700/7414), Math.round(16700/7414), Math.round(4900/7414), Math.round(92800/7414), Math.round(123300/7414), Math.round(25800/7414), Math.round(86200/7414), Math.round(102700/7414), Math.round(71800/7414), Math.round(52500/7414), Math.round(127500/7414), Math.round(25500/7414)],
                backgroundColor: [
                    'rgba(51, 0, 0, 0.8)',
                        'rgba(102, 0, 0, 0.8)',
                        'rgba(153, 0, 0, 0.8)',
                        'rgba(204, 0, 0, 0.8)',
                        'rgba(255, 0, 0, 0.8)',
                        'rgba(255, 51, 51, 0.8)',
                        'rgba(255, 77, 77, 0.8)',
                       'rgba(255, 128, 128, 0.8)',
                        'rgba(255, 179, 179, 0.8)',                   
                    'rgba(255,160,122, 0.7)',
                    'rgba(250,128,114, 0.7)', 
                    'rgba(2233,150,122, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                    'rgba(255, 0, 0, 0.1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 18,
                fontColor: 'white',
                fontWeight: 'normal',
                fontFamily : "Roboto Condensed",
                padding: 25,
                text: 'Main concerns among people in the camps'
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
                    fontColor: 'silver',
                    
                }
            }
                                            
        }
    });
}

    function sc2(){
        $("canvas#safetyChart").remove();
        $("div#facts_2").append('<canvas id="safetyChart"width="auto" height="400px"></canvas>');
        var ctx = document.getElementById('safetyChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['No adequate public lighting','Unstable structure', 'No adequate lighting in houses', 'Fear of break in', 'Shelter Deterioration', 'No Locks','Danger or violence when collecting wood', 'Sharing shelter space with strangers','Location of shelter exposed to landslide'],
                datasets: [{
                    
                    data: [ Math.round(821/47.74), Math.round(732/47.74), Math.round(1152/47.74), Math.round(168/47.74), Math.round(840/47.74), Math.round(457/47.74), Math.round(393/47.74), Math.round(30/47.74), Math.round(181/47.74)],
                    backgroundColor: [
                        'rgba(51, 0, 0, 0.7)',
                        'rgba(102, 0, 0, 0.7)',
                        'rgba(153, 0, 0, 0.7)',
                        'rgba(204, 0, 0, 0.7)',
                        'rgba(255, 0, 0, 0.7)',
                        'rgba(255, 51, 51, 0.7)',
                        'rgba(255, 77, 77, 0.7)',
                       'rgba(255, 128, 128, 0.7)',
                        'rgba(255, 179, 179, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)',
                        'rgba(255, 0, 0, 0.1)'
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
                    text: 'Safety concerns among people in the camps'
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
                        fontColor: 'white',
                        
                    }
                }
                                                
            }
        });
    }


    function sc3(){
        $("canvas#safetyChart").remove();
        $("div#facts_2").append('<canvas id="safetyChart" width="auto" height="300px"></canvas>');
        var ctx = document.getElementById("safetyChart").getContext("2d");

var data = {
    labels: ["Transportation", "Distribution site", "Latrine", 'Bathing_Washing facility', 'Waterpoints', 'Firewood collection site', 'Market'],
    datasets: [
        {
            label: "Young Women",
            backgroundColor: 'rgba(255, 77, 77, 0.6)',
            data: [Math.round(430/19.17), Math.round(336/19.17), Math.round(244/19.17), Math.round(602/19.17), Math.round(77/19.17), Math.round(172/19.17), Math.round(430/56.17)]
        },
        {
            label: "Adult Women",
            backgroundColor:'rgba(179, 0, 0, 0.6)',
            data: [Math.round(50/29.14), Math.round(315/29.14), Math.round(751/29.14), Math.round(753/29.14), Math.round(803/29.14), Math.round(181/29.14), Math.round(61/29.14)]
        },

    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        title: {
            display: true,
            fontSize: 18,
            fontColor: 'white',
            fontFamily : "Roboto Condensed",
            padding: 25,
            text: 'Places perceived as not safe by Women'
        },
        tooltips: {
            callbacks: {
                title: function() {},
                label: function (tooltipItem, data) {
                    if (tooltipItem.datasetIndex === 0) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%'
                    } else if (tooltipItem.datasetIndex === 1) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][1]['data'][tooltipItem['index']] + '%'
                    }
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
                display: true,
                labels:{
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                }
            },
    }
});
    }

    function sc4(){
        $("canvas#safetyChart").remove();
        $("div#facts_2").append('<canvas id="safetyChart" width="auto" height="300px"></canvas>');
        $("canvas#safetyChart").remove();
        $("div#facts_2").append('<canvas id="safetyChart" width="auto" height="300px"></canvas>');
        var ctx = document.getElementById("safetyChart").getContext("2d");

var data = {
    labels: ["Transportation", "Distribution site", "Latrine", 'Bathing_Washing facility', 'Waterpoints', 'Firewood collection site', 'Market'],
    datasets: [
        {
            label: "Young Men",
            backgroundColor: "rgba(237, 248, 251, 0.7)",
            data: [Math.round(208/22.55), Math.round(250/22.55), Math.round(421/22.55), Math.round(318/22.55), Math.round(290/22.55), Math.round(444/22.55), Math.round(324/22.55)]
        },
        {
            label: "Adult Men",
            backgroundColor: "rgba(173,216,230, 0.7)",
            data: [Math.round(297/24.38), Math.round(356/24.38), Math.round(304/24.38), Math.round(236/24.38), Math.round(227/24.38), Math.round(599/24.38), Math.round(419/24.38)]
        },

    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        title: {
            display: true,
            fontSize: 18,
            fontColor: 'white',
            fontFamily : "Roboto Condensed",
            padding: 25,
            text: 'Places perceived as not safe by Men'
        },
        tooltips: {
            callbacks: {
                title: function() {},
                label: function (tooltipItem, data) {
                    if (tooltipItem.datasetIndex === 0) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%'
                    } else if (tooltipItem.datasetIndex === 1) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][1]['data'][tooltipItem['index']] + '%'
                    }
                }
            }
        },
        scales: {
            xAxes: [{
                display: false //this will remove all the x-axis grid lines
            }],
            yAxes: [{
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    },
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                }
            }]
        },
            legend: {
                display: true,
                labels:{
                    fontColor: 'white',
                    fontFamily : "Roboto Condensed",
                }
            },
    }
});
    }

