let url = "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_c7e6973d3efc4779a14a16f35d91edd2";
fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data.latestPrice)
})