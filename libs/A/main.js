///<reference path="jquery-3.4.1.js" />
"use-strict"

let tempArr = [];
$(() => {


    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currenciesCoin: "https://api.coingecko.com/api/v3/coins",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }

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
        let content = "";

        for (const item of currency) {
            tempArr.push(item)
            const card = `
            <div class="card bg-light border-dark col-4" id="${item.id}">
            <div class="card-body bg-transparent">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input input-cards-id" id="L+${item.id}" value="L+${item.id}">
                    <label class="custom-control-label" for="L+${item.id}"></label>
                </div>
                <h5 class="card-title">${item.symbol}</h5>
                <p class="card-text">${item.name}</p>
                <img src="${item.image.small}" alt="Card image cap"> 
        
                <p>
                    <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapse+${item.id}" role="button"
                        aria-expanded="false" aria-controls="multiCollapse+${item.id}">More Info</a>
        
                </p>
        
                <div class="collapse multi-collapse" id="multiCollapse+${item.id}">
                    // <p class="card-text"><small class="text-muted">Last updated : <br/>${item.last_updated}</small>
        
                    </p>
                     <p class="card-text">price :$</p> 
                </div>
            </div>
            </div>
        
            `
            content += card;
        }
        $("#stage").append(content)
    }
    getCoins()
});

//   <img src="${item.thumbnailUrl}"