let matchChart;

function renderCricketChart(match) {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    if (matchChart) matchChart.destroy();

    const labels = [match.teams[0], match.teams[1]];
    const scores = [match.score[0].r, match.score[1].r];

    matchChart = new Chart(ctx, {
        type: "bar",
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