document.addEventListener("DOMContentLoaded", () => {
    const matchSelect = document.getElementById('matchSelect');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    fetchCricketData().then(matches => {
        console.log('matches:', matches); 
        if(matches){
            matches.forEach(match => {
                const option = document.createElement('option');
                option.value = match.id;
                option.textContent = `${match.name} (${match.status})`;
                matchSelect.appendChild(option);
            });
        }
        else console.log('No matches found');   
    })
    matchSelect.addEventListener("change", () => {
        const selectedMatch = matchSelect.value;
        fetchCricketData().then(matches => {
            const match = matches.find(m => m.id === selectedMatch);
            if (match) renderCricketChart(match);
        });
    });
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
});
