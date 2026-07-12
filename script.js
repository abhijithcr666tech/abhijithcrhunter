// ===============================
// ACH PRO TERMINAL v2.0 ALPHA
// ===============================

// Index Data
const marketData = {
    NIFTY: {
        spot: "25180.00",
        trend: "Bullish",
        score: "91%",
        pcr: "0.94",
        support: "25120",
        resistance: "25240",
        maxPain: "25150"
    },
    BANKNIFTY: {
        spot: "56840.00",
        trend: "Bullish",
        score: "89%",
        pcr: "0.91",
        support: "56680",
        resistance: "57020",
        maxPain: "56800"
    },
    FINNIFTY: {
        spot: "26680.00",
        trend: "Sideways",
        score: "74%",
        pcr: "1.02",
        support: "26610",
        resistance: "26740",
        maxPain: "26650"
    },
    MIDCPNIFTY: {
        spot: "13890.00",
        trend: "Bullish",
        score: "82%",
        pcr: "0.97",
        support: "13820",
        resistance: "13960",
        maxPain: "13900"
    },
    SENSEX: {
        spot: "83250.00",
        trend: "Bullish",
        score: "90%",
        pcr: "0.93",
        support: "83100",
        resistance: "83500",
        maxPain: "-"
    },
    BANKEX: {
        spot: "63250.00",
        trend: "Bullish",
        score: "88%",
        pcr: "0.95",
        support: "63120",
        resistance: "63420",
        maxPain: "-"
    }
};

// Change Dashboard
const selector = document.getElementById("indexSelect");

selector.addEventListener("change", function () {

    const d = marketData[this.value];

    document.getElementById("spot").innerHTML = d.spot;

    document.querySelector(".bull").innerHTML = d.trend;

    const summary = document.querySelectorAll(".card")[1];

    summary.innerHTML = `
    <h2>Market Summary</h2>

    <p>Spot : <span id="spot">${d.spot}</span></p>

    <p>Trend : <span class="bull">${d.trend}</span></p>

    <p>ACH Score : ${d.score}</p>

    <p>PCR : ${d.pcr}</p>

    <p>Max Pain : ${d.maxPain}</p>

    <p>Support : ${d.support}</p>

    <p>Resistance : ${d.resistance}</p>
    `;

});

// Download Button
function generateReport(){

alert("🚀 TXT Report Generator\n\nComing in Version 2.1");

}

// Welcome Popup
window.onload=function(){

setTimeout(function(){

alert("Welcome to ACH PRO TERMINAL v2.0 Alpha 🚀");

},500);

};
