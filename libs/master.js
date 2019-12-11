// call api and get data

$(() => {
    // let tempArr = []
    // // **(manifest documentation of other methods)**
const config = {
    currencies: "https://api.coingecko.com/api/v3/coins/list/",
    currenciesCoin: "https://api.coingecko.com/api/v3/coins/",
    comparePrice: "https://min-api.cryptocompare.com/data"
}

$("#searchBut").click(() => {
    console.log("?symbol/" + $("#searcher").val())
    // showCoins("?symbol/" + $("#searcher").val())

});

function getAjaxData(url, callback) {
    $.ajax({
        method: "GET",
        url: url,
        error: err => alert("something went wrong, please try again ", err.message),
        success: coins => callback(coins)
    });
}

function showCoins(filter) {
    getAjaxData(config.currenciesCoin + filter, finalData => displayCoins(finalData));
}
function displayCoins(coins) {
    console.log(coins)
}
}); //RF