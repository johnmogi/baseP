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
                },
            })
        })
    }
}

// [{},{}]
api.retreiveCurrencies().
then(res => {
    saveTheCurrencies(res.slice(0, 8))
})

function saveTheCurrencies(result) {
    tempArr.push(result)
    console.log(result)
    // draw(result)
}

api.retreiveCurrencies().
then(res => {
    searchTheCurrencies(res.slice(0, 8))
})

function searchTheCurrencies(result) {
    showCoins(result/ + /?symbol/usd)
  
    // draw(result)
}

function showCoins(filter){
    getAjaxData("https://restcountries.eu/rest/v2/" + filter, finalData => displayCountries(finalData));
}


}); //RF