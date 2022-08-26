let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
    fetch(endpoint)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // console.log(data.message);
        displayQuote(data.message);
        })
        .catch(function () {
        console.log("An error occurred");
    });
}

function displayQuote(quote) {
    let quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

// target button class new-quote
let newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

getQuote();
