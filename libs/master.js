// Have created a background arr for better performance
let coinsDOM = {
    baseArr :[]
}
$(() => {
$("#homeStage").html(homeContent);

const config = {
    currencies: "https://api.coingecko.com/api/v3/coins/list",
    currencyById: "https://api.coingecko.com/api/v3/coins/",
    comparePrice: "https://min-api.cryptocompare.com/data"
}
$("#aboutBut").click(() => {
    $("#homeStage").toggle();
    spinnerSvg();
    $("#stage").empty();
    $("#stage").html(about);
});

function spinnerSvg() {
    $("#stage").empty();
    $("#stage").html(`<img src="images/spinner.svg" alt="" id="spinnerId" />`)
}

$("#searchBut").click(() => {
    let searchVal = $("#searcher").val()  
    if (!$("#searcher").val()) {
        alert("please fill in the field")
        return
    } else {
        findCoin(coinsDOM.baseArr, searchVal)
        //* a demo on how the search works externally (not needed but interesting)
        // getAjaxData(api.currencyById + $("#searcher").val().toLowerCase(), finalData => findCoin(finalData));
    }
});

function findCoin(coin, searchVal) {
 
    // const searchItem = $("#searcher").val().toLowerCase()
  
    for (const item of coin) {
      
        if (item.symbol == searchVal) {
            console.log(item.symbol)
            console.log(item.name)
            // const name = `${item.name} `
            $("#stage").empty();
            displayCoins(currency)
          }
    
        // $("#stage").append(name);
    }
}

$("#liveBut").click(() => {
    lineChartData.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    lineChartData.datasets[0].data = [1, 2, 40, 500, 45]
    lineChartData.datasets[1].data = [2, 40, 500, 45, 1]
    spinnerSvg();
    $("#stage").empty();
    $("#stage").html(`<canvas id="canvas"></canvas>`);

    // $("#canvas").show();

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Coin chart coin tracker'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
});

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

    const api = {
        retreiveCurrencies: function () {
            return new Promise((resolve) => {
                $.ajax({
                    url: config.currencyById,
                    method: "GET",
                    success: function (currencies) {
                        resolve(currencies);
                     

                    },
                    error: function () {
                        alert("error")
                    },
                })
            })
        },
        retreiveCoin: function () {
            return new Promise((resolve) => {
                $.ajax({
                    url: config.currencies,
                    method: "GET",
                    success: function (coins) {
                        resolve(coins);
                      

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

        spinnerSvg();
     
        let content = "";
        $("#stage").empty();

        // currency.forEach(i => {
for (const i of currency) {
    

            const card = document.createElement("div")
            card.setAttribute("class", "card border-dark bg-light col-3")
            card.id=(`${i.id}`)
            
            const cardHeader = document.createElement("div")
            cardHeader.setAttribute("class", "card-header text-info")
            cardHeader.append(`${i.name}`)
            card.append(cardHeader)

            const cardSwitch = document.createElement("div")
            cardSwitch.setAttribute("class", "custom-control custom-switch")
            cardHeader.append(cardSwitch)

            const switcher = document.createElement("input")
            switcher.setAttribute("type", "checkbox")
            switcher.setAttribute("class", "custom-control-input input-cards-id")
            switcher.id=(`L+${i.id}`)
            switcher.setAttribute("value", `L+${i.id}`)
            switcher.setAttribute("role", "button")
            switcher.setAttribute("aria-pressed", "")
            cardSwitch.append(switcher)
    
            const switcherLabel = document.createElement("label")
            switcherLabel.classList.add("custom-control-label")
            switcherLabel.setAttribute("for", `L+${i.id}`)
            cardSwitch.append(switcherLabel)
           
            const cardBody = document.createElement("div")
            cardBody.setAttribute("class", "card-body text-dark")
            card.append(cardBody)

            const cardTitle = document.createElement("h5")
            cardTitle.classList.add("card-title")
            cardTitle.append(`${i.symbol}`)
            cardBody.append(cardTitle)
            

        // for (const i of currency) {

        //     let coin = new Coin(getId(),`${i.name}`,`${i.symbol}`,`${i.image.large}`,`${i.current_price} `, false)
        //     // console.log(coin)

    //         const card = `

    //    1             <div class="card border-dark bg-light col-3"  id="${i.id}">
    //     2  <div class="card-header text-info">${i.name}
    //     3  <div class="custom-control custom-switch">
    //      4 <input type="checkbox" class="custom-control-input input-cards-id" id="L+${i.id}" value="L+${i.id}" role="button" aria-pressed="false">
    //      5 <label class="custom-control-label" for="L+${i.id}"></label>
    //   </div>
    //       </div>
    //     6  <div class="card-body text-dark">
    //      7   <h5 class="card-title">${i.symbol}</h5>
           
    //         <img class="card-img-top" src="${i.image.large}" alt="${i.name}" />
    //         <p>

    //         <a class="btn btn-primary" data-toggle="collapse" href="#C${i.id}" role="button" aria-expanded="false" aria-controls="multiCollapse+${i.id}">More Info</a>

    //         <div class="collapse multi-collapse" id="C${i.id}">
    //   <div class="card card-body">
    //   <p class="card-text"><small class="text-muted">Last updated : <br/>${i.last_updated}</small>

    //   </p>
    //   <p class="card-text">price : ${i.market_data.current_price.usd}$</p> 
    //   </div>
    // </div>


    //     </div>

    //     </div>
    $("#stage").append(card)

    // content += card;
        

  }              
 

    }


// this call is a background store into home + search areas.
    api.retreiveCoin().
    then(res => {
        for (const obj of res) {
            coinsDOM.baseArr.push(obj)
        }
    })
}); //RF