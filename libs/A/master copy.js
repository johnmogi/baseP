// call api and get data

$(() => {
    let tempArr = []
    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currenciesCoin: "https://api.coingecko.com/api/v3/coins",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }

      // homepage getCoinsinCards

    function getCoins() {
        $.ajax({
            method: "GET",
            url: config.currenciesCoin,
            error: err => alert(err.message),
            success: currency => displayCoins(currency.slice(0, 9))
        });
    }
    function displayCoins(currency) {
        console.log(currency)
         }

    getCoins()
    
  

    // live report getCoin into charts

          
    function getCoins2() {
        $.ajax({
            method: "GET",
            url: config.currenciesCoin,
            error: err => alert(err.message),
            success: coinData => displayCoins2(coinData.slice(0, 9))
        });
    }
    function displayCoins2(coinData) {
        var ctx = document.getElementById('myChart').getContext('2d');
        // let tempArr = []
for (const item in coinData) {
    tempArr.push(coinData[item])
}
console.log(tempArr)

var myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels:[tempArr[0].name,tempArr[1].name],

        datasets: [{
            label: '# of Votes',
            data:  [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
         }

    getCoins2()


// call chart. js
// place data if retrieved into chart
//


}); //RF