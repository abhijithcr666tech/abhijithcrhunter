function analyzeMarket() {

    let price = parseFloat(document.getElementById("price").value);
    let signal = document.getElementById("signal").value;

    if (isNaN(price)) {
        document.getElementById("result").innerHTML =
        "⚠️ Please enter market price";
        return;
    }

    let target, stoploss;

    if (signal === "BUY") {
        target = price + 100;
        stoploss = price - 50;
    } else {
        target = price - 100;
        stoploss = price + 50;
    }

    document.getElementById("result").innerHTML =
    `<h3>${signal} Signal</h3>
     <p>Entry : ${price}</p>
     <p>Target : ${target}</p>
     <p>Stop Loss : ${stoploss}</p>`;
}
