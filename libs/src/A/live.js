$(() => {



    // type: 'bar',
    // data: {

    //     // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     labels:[tempArr[0].name,tempArr[1].name],

    //     datasets: [{
    //         label: '# of Votes',
    //         data:  [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //             'rgba(255, 159, 64, 0.2)'
    //         ],
    //         borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)'
    //         ],
    //         borderWidth: 1
    //     }]
    // },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // }






    // call chart. js
    // place data if retrieved into chart
    //



    // function live() {
    //     emptyDivCoins();
    //     spinner("divCoins");  
    //      config.currenciesCoin(tempArr[0], tempArr[1], tempArr[2], tempArr[3], tempArr[4]).then((result) => {
    const current_usd_rate_0 = result[tempArr[0]] ? result[tempArr[0]].USD : 0;
    const current_usd_rate_1 = result[tempArr[1]] ? result[tempArr[1]].USD : 0;
    const current_usd_rate_2 = result[tempArr[2]] ? result[tempArr[2]].USD : 0;
    const current_usd_rate_3 = result[tempArr[3]] ? result[tempArr[3]].USD : 0;
    const current_usd_rate_4 = result[tempArr[4]] ? result[tempArr[4]].USD : 0;
    //         const cloneCard = $("#chartContainer").clone();
    //         cloneCard.css({
    //             display: "inline-block"
    //         });
    //         $("#chartContainer").append(cloneCard);
    //         renderChart(current_usd_rate_0, current_usd_rate_1, current_usd_rate_2, current_usd_rate_3, current_usd_rate_4);
    //         $("#spinner").remove();
    //     }).catch(err => noDadaMessage());
    // }


    function renderChart(current_usd_rate_0, current_usd_rate_1, current_usd_rate_2, current_usd_rate_3, current_usd_rate_4) {
        const chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Converting to USD"
            },
            data: [{
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [{
                        label: tempArr[0],
                        y: current_usd_rate_0
                    },
                    {
                        label: tempArr[1],
                        y: current_usd_rate_1
                    },
                    {
                        label: tempArr[2],
                        y: current_usd_rate_2
                    },
                    {
                        label: tempArr[3],
                        y: current_usd_rate_3
                    },
                    {
                        label: tempArr[4],
                        y: current_usd_rate_4
                    }
                ]
            }]
        });
        chart.render();
    }
    renderChart();

});