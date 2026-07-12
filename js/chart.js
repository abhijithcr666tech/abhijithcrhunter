document.addEventListener("DOMContentLoaded", function () {

    const chartContainer = document.getElementById("tvchart");

    const chart = LightweightCharts.createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: 500,

        layout: {
            background: {
                color: "#0d1117"
            },
            textColor: "#ffffff"
        },

        grid: {
            vertLines: {
                color: "#1f2937"
            },
            horzLines: {
                color: "#1f2937"
            }
        },

        rightPriceScale: {
            borderColor: "#444"
        },

        timeScale: {
            borderColor: "#444"
        }

    });

    const candleSeries = chart.addCandlestickSeries();

    candleSeries.setData([
        { time: "2026-07-07", open: 24000, high: 24120, low: 23960, close: 24090 },
        { time: "2026-07-08", open: 24090, high: 24160, low: 24020, close: 24120 },
        { time: "2026-07-09", open: 24120, high: 24210, low: 24080, close: 24180 },
        { time: "2026-07-10", open: 24180, high: 24250, low: 24110, close: 24220 },
        { time: "2026-07-11", open: 24220, high: 24300, low: 24190, close: 24260 }
    ]);

    window.addEventListener("resize", () => {
        chart.applyOptions({
            width: chartContainer.clientWidth
        });
    });

});
