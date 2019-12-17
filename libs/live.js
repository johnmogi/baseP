$(() => {
$("#liveBut").click(() => {
    if (coinsDOM.baseArr.length >5){alert("no more then 5 coins please") 
    return }

    lineChartData.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    lineChartData.datasets[0].data = [1, 2, 40, 500, 45]
    lineChartData.datasets[1].data = [2, 40, 500, 45, 1]
    // spinnerSvg();
    $("#stage").empty();
    $("#stage").html(`<canvas id="canvas"></canvas>`);

    // $("#canvas").show();

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Coin chart coin tracker'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
});
});