const coinsDOM = {
    baseArr: []
}

$(() => {

    let getId = () => `id_${Math.floor(Math.random() * 9999) + 1 }`;

    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currencyById: "https://api.coingecko.com/api/v3/coins/",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }
    class Coin {
        constructor(_id, name, symbol, image, current_price, selected) {
            this._id = _id
            this.name = name
            this.symbol = symbol
            this.image = image
            this.current_price = current_price
            this.selected = selected

        }

    }

    $("#homeStage").html(homeContent);

    const api = {
        retreiveCurrencies: function () {
            return new Promise((resolve) => {
                $.ajax({
                    url: config.currencyById,
                    method: "GET",
                    success: function (currencies) {
                        resolve(currencies);
                        for (const obj of currencies) {
                            coinsDOM.baseArr.push(obj)
                        }

                    },
                    error: function () {
                        alert("error")
                    },
                })
            })
        }
    }


    api.retreiveCurrencies().
    then(res => {
        displayCoins(res.slice(0, 8))
    })

    function displayCoins(currency) {
        let content = "";

        for (const item of currency) {
            let coin = new Coin(getId(), `${item.name}`, `${item.symbol}`, `${item.image.large}`, `${item.current_price} `)
            console.log(coin)


            const card = `
        <div class="card border-dark bg-light col-3"  id="${item.id}">
<div class="card-header text-info">${item.name}
<div class="custom-control custom-switch">
<input type="checkbox" class="custom-control-input input-cards-id" id="L+${item.id}" value="L+${item.id}">
<label class="custom-control-label" for="L+${item.id}"></label>
</div>
</div>
<div class="card-body text-dark">
<h5 class="card-title">${item.symbol}</h5>

<img class="card-img-top" src="${item.image.large}" alt="${item.name}" />
<p>

<a class="btn btn-primary" data-toggle="collapse" href="#C${item.id}" role="button" aria-expanded="false" aria-controls="multiCollapse+${item.id}">More Info</a>

<div class="collapse multi-collapse" id="C${item.id}">
<div class="card card-body">
<p class="card-text"><small class="text-muted">Last updated : <br/>${item.last_updated}</small>

</p>
<p class="card-text">price : ${item.market_data.current_price.usd}$</p> 
</div>
</div>


</div>

</div>
        `

            content += card;
        }
        $("#stage").empty();

        $("#stage").append(content)
    }


}); //RF