var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["すごく良い", "良い", "あまり良くない", "良くない"],
        datasets: [{
            backgroundColor: ["#BB5179", "#FAFF67", "#58A27C", "#3C00FF"],
            data: [66.7, 32.9, 0.4, 0],
        }, ],
    },
    options: {
        title: {
            display: true,
            text: "来場者アンケート",
            fontColor: 'white',
            fontSize: 20,
            textAlign: 'center',

        },
        legend: {
            labels: {
                // このフォントプロパティ指定は、グローバルプロパティを上書きします
                fontColor: 'white',
                fontSize: 20
            }
        },
    },
});