const search = document.querySelector('.search');

search.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        const url = 'https://www.google.com.br/search?q=' + search.value;
        window.location.href = url; // Corrected this line
    }
});
