// https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id_
// https://api.coingecko.com/api/v3/simple/price?ids=particl&vs_currencies=usd,eur
// https: //api.coingecko.com/api/v3/simple/symbol?ids=
$(() => {

    let tempArr = []

    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currencyById: "https://api.coingecko.com/api/v3/coins/",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }


    const api = {
        retreiveCurrencies: function () {
            return new Promise((resolve) => {
                $.ajax({
                    url: config.currencies,
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


    $("#homeBut").click(() => {
        $("#stage").empty();
        api.retreiveCurrencies().
        then(res => {
            displayCoins(res.slice(0, 8))
        })

    });

    $("#liveBut").click(() => {
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

    $("#searchBut").click(() => {
        if (!$("#searcher").val()) {
            alert("please fill in the field")
            return
        } else {
            // console.log((config.currenciesCoin + "?symbol/" + $("#searcher").val()))
            // showCoins("?symbol/" + $("#searcher").val())
            // let searchValue = $("#searcher").val()
            getAjaxData(config.currencyById + $("#searcher").val().toLowerCase(), finalData => findCoin(finalData));

            // displayCoins(coins)
        }
    });

    function findCoin(coin) {
        console.log(coin)
        const name = `${coin.name} `
        $("#stage").empty();
        $("#stage").append(name);

    }


    // homepage getCoinsinCards
    //  labels:[tempArr[0].name,tempArr[1].name],



    function displayCoins(currency) {
        // console.log(currency)
        let content = "";

        for (const item of currency) {
            tempArr.push(item)
            const card = `

                    <div class="card border-dark bg-light col-3"  id="${item.id}">
          <div class="card-header text-info">${item.name}</div>
          <div class="card-body text-dark">
            <h5 class="card-title">${item.symbol}</h5>

            <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapse+${item.id}" role="button"
                aria-expanded="false" aria-controls="multiCollapse+${item.id}">More Info</a>

        </p>

        <div class="collapse multi-collapse" id="multiCollapse+${item.id}">
          <p class="card-text"><small class="text-muted">Last updated : <br/>${item.last_updated}</small>

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

    api.retreiveCurrencies().
    then(res => {
        displayCoins(res.slice(0, 8))
    })



}); //RF