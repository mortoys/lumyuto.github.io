
function loadData(path) {
    var data = null;
    Papa.parse("https://raw.githubusercontent.com/lumyuto/lumyuto.github.io/master"+path, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results.data);
            data = results.data
        }
    });
    return function (handler) {
        handler(data)
    }
}


function drawTimeSeries(config) {
    return function (data){
        var x = config.x(data)
        var y = config.y(data)
        var ctx = document.getElementById(config.el).getContext('2d'); 
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: x,
                datasets: [{
                    data: y,
                    pointRadius: 0,
                    fill: false,
                    lineTension: 0,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                point: {
                    pointStyle: ''
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'series',
                        time: {
                            unit: 'year'
                            // displayFormats: {
                            //     quarter: 'MMM YYYY'
                            // }
                        }
                    }]
                },
                ... (config.options||{})
            }
        });
    }
}