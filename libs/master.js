// call api and get data

$(() => {
    let tempArr = []
    // // **(manifest documentation of other methods)**
const config = {
    currencies: "https://api.coingecko.com/api/v3/coins/list/",
    currenciesCoin: "https://api.coingecko.com/api/v3/coins/",
    comparePrice: "https://min-api.cryptocompare.com/data"
}
const api = {
    retreiveCurrencies: function () {
        return new Promise((resolve) => {
            $.ajax({
                url: config.currenciesCoin,
                method: "GET",
                success: function (currencies) {
                    resolve(currencies)
                },
                error: function () {
                    alert("error")
                    // alert(xhr.status);
                    // alert(thrownError);
                }
            })
        })
    }
}


api.retreiveCurrencies().
then(res => {
    saveTheCurrencies(res.slice(0, 8))
})

function saveTheCurrencies(result) {
    tempArr.push(result)
    console.log(result)
    console.log(tempArr)
    // draw(result)
}

// function getCoin(result) {
//     console.log(result)
//     console.log(tempArr)
// }

// getCoin()
  // search in coins

  function searchCoin(){
    getCoins() 
  }



}); //RF