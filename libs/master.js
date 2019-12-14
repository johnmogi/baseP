// https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id_
// https://api.coingecko.com/api/v3/simple/price?ids=particl&vs_currencies=usd,eur
// https: //api.coingecko.com/api/v3/simple/symbol?ids=

// api key : 4e018ed9e79f55f4a8ce1334f5bef0edcf27642fd1d7744698b7605e4ccade42

// https: //min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD



let baseArr = []

$(() => {

    function spinnerSvg() {
        $("#stage").empty();
        $("#stage").html(`<img src="images/spinner.svg" alt="" id="spinnerId" />`)

    }
    spinnerSvg();

    const config = {
        currencies: "https://api.coingecko.com/api/v3/coins/list",
        currencyById: "https://api.coingecko.com/api/v3/coins/",
        comparePrice: "https://min-api.cryptocompare.com/data"
    }
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
                        // alert(xhr.status);
                        // alert(thrownError);
                    },
                })
            })
        }
    }


    api.retreiveCurrencies().
    then(res => {
        displayCoins(res.slice(0, 8))
    })
    $("#homeStage").html(homeContent);


    //? PAGES NAV

    $("#homeBut").click(() => {

        spinnerSvg();
        $("#stage").html(homeContent);
        displayCoins(baseArr)
    });

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


    $("#aboutBut").click(() => {
        spinnerSvg();
        $("#stage").empty();
        $("#stage").html(about);
    });



    $("#searchBut").click(() => {

        if (!$("#searcher").val()) {
            alert("please fill in the field")
            return
        } else {
            findCoin(baseArr)
            //* a demo on how the search works externally (not needed but interesting)
            // getAjaxData(config.currencyById + $("#searcher").val().toLowerCase(), finalData => findCoin(finalData));
        }
    });

    function findCoin(coin) {

        const searchItem = $("#searcher").val().toLowerCase()
        console.log(searchItem)
        for (const item of coin) {
            if (item.symbol === searchItem) {
                console.log(coin.item.symbol)
                console.log(coin.name)
            }
            const name = `${coin.name} `
            $("#stage").empty();
            $("#stage").append(name);
        }
    }


    // homepage getCoinsinCards
    //  labels:[tempArr[0].name,tempArr[1].name],



    function displayCoins(currency) {

        let content = "";

        for (const item of currency) {
            // tempArr.push(item)
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