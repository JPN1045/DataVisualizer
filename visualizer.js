let matchChart;

function renderCricketChart(match) {
    const ctx = document.getElementById('match-chart').getContext('2d');
    if (matchChart) matchChart.destroy();

    const labels = [match.teamInfo[0].name, match.teamInfo[1].name];
    const scores = [match.teamInfo[0].score, match.teamInfo[1].score];

    matchChart = new Chart(ctx, {
        types: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Scores",
                data: scores,
                backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 2
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}