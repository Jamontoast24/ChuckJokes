let url = `https://api.chucknorris.io/jokes/random`;
let displayJoke = document.querySelector(".displayJoke");


document.getElementById("newJoke").addEventListener("click", function() {
    fetch(url)
    .then (res => {
        return res.json();
    })

    .then(joke => {
        const {value} = joke.value;
        displayJoke.textContent = joke.value;
    })
});