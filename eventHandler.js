document.addEventListener("DOMContentLoaded", () => {
    const matchSelect = document.getElementById('matchSelect');
    const darkModeToggle = document.getElementById('darkModeToggle');\
    
    fetchCricketData().then(matches => {
        matches.forEach(match => {
            const option = document.createElement('option');
            option.value = match.id;
            option.textContent = `$`
        });
    })
})