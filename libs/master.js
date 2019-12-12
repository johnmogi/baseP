$(() => {

const config = {
    currencies: "https://api.coingecko.com/api/v3/coins/list/",
    currenciesCoin: "https://api.coingecko.com/api/v3/coins/",
    comparePrice: "https://min-api.cryptocompare.com/data"
}

$("#searchBut").click(() => {
    if (!$("#searcher").val()){
        alert("please fill in the field")
        return
    }
    else{  
// console.log((config.currenciesCoin + "?symbol/" + $("#searcher").val()))
    // showCoins("?symbol/" + $("#searcher").val())
    getAjaxData(config.currencies +"?symbol/" + $("#searcher").val(), finalData => displaySearchedCoins(finalData.slice(0, 9)));

    // displayCoins(coins)
    }
});
homeCoins()

function getAjaxData(url, callback) {
    $.ajax({
        method: "GET",
        url: url,
        error: err => alert("something went wrong, please try again ", err.message),
        success: coins => callback(coins)
    });
}
function homeCoins() {
    getAjaxData(config.currencies , finalData => displayCoins(finalData.slice(0, 9)));
    
}

function displayCoins(coins) {
    console.log(coins)
    $("#stage").empty();
    let content = "";
    for (const item of coins) {
        const theCoin = `
        ${item.name}             
            `;
        content += theCoin;
    }
    $("#stage").append(content);
}

function displaySearchedCoins(coins) {
    console.log(coins)
    $("#stage").empty();
    let content = "";
    for (const item of coins) {
        const theCoin = `
        ${item.name}             
            `;
        content += theCoin;
    }
    $("#stage").append(content);
}

}); //RF
