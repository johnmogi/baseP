// https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id_
// https://api.coingecko.com/api/v3/simple/price?ids=particl&vs_currencies=usd,eur
// https: //api.coingecko.com/api/v3/simple/symbol?ids=
$(() => {
    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currencyById: "https://api.coingecko.com/api/v3/coins/",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }

    function getAjaxData(url, callback) {
        $.ajax({
            method: "GET",
            url: url,
            error: err => alert("something went wrong, please try again ", err.message),
            success: coins => callback(coins)
        });
    }

    // first we need to get the id


    $("#searchBut").click(() => {
        if (!$("#searcher").val()) {
            alert("please fill in the field")
            return
        } else {
            // console.log((config.currenciesCoin + "?symbol/" + $("#searcher").val()))
            // showCoins("?symbol/" + $("#searcher").val())
            getAjaxData(config.currencyById + $("#searcher").val(), finalData => findCoin(finalData));

            // displayCoins(coins)
        }
    });
    homeCoins()



    function homeCoins() {
        getAjaxData(config.currencies, finalData => displayCoins(finalData.slice(0, 9)));

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

    function findCoin(coin) {
        console.log(coin)
        const name = `${coin.name} `
        $("#stage").empty();
        $("#stage").append(name);

    }

}); //RF