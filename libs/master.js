
$(() => {
let getId = () => `id_${Math.floor(Math.random() * 9999) + 1 }`;
let baseArr = []
const config = {
    currencies: "https://api.coingecko.com/api/v3/coins/list",
    currencyById: "https://api.coingecko.com/api/v3/coins/",
    comparePrice: "https://min-api.cryptocompare.com/data"
}
class Coin { 
    constructor(_id,name, symbol, image,current_price,selected){ 
        this._id= _id 
        this.name= name
        this.symbol= symbol
        this.image= image
        this.current_price= current_price
        this.selected= selected

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
                            baseArr.push(obj)
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

        for (const i of currency) {
            let coin = new Coin(getId(),`${i.name}`,`${i.symbol}`,`${i.image.large}`,`${i.current_price} `)
console.log(coin)
        }
        let content = "";
       
            



 
      
    }

}); //RF