Highcharts.chart('annual-sales', {
    chart: {
        zoomType: 'xy',
         style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: '',
        align: 'Center'
    },
    
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [ { // Secondary yAxis
        title: {
            text: 'Violations Count',
            style: {
                color: "#c50000"
            }
        },
        labels: {
            
            style: {
                color: "#c50000"
            }
        },
        opposite: true,
        gridLineColor: '#c2c2c2',
        gridLineWidth: 0,
        min: 0,
    },{ // Primary yAxis
        labels: {
            
            style: {
                color: '#007647'
            }
        },
        title: {
            text: 'Revenue (KES)',
            style: {
                color: "#007647"
            }
        }
    }],
    tooltip: {
        shared: true
    },
    
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Revenue',
        type: 'column',
        color:'#00c399',
        yAxis: 1,
        data: [27452000, 62882000, 72172000, 33412000, 82902000, 102842000, 14562000, 25172000, 33902000,
            56002000, 12862000, 13212000],
        tooltip: {
            valuePrefix: 'KES '
        }

    }, {
        name: 'Violations',
        type: 'spline',
        color:'#c50000',
        data: [13, 14, 5, 7, 3, 13, 14, 10, 5,
            27, 11, 16],
        tooltip: {
            valueSuffix: ''
        }
    }]
});