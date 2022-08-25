let cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];

// Duplicate cardsArray to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
console.log(gameGrid);

// Randomize game grid on each load
gameGrid.sort(function() {
   return 0.5 - Math.random();
});

// Grab the div with an id of game-board and assign to a variable game
let game = document.getElementById('game');

// Create a section element and assign it to variable grid
let grid = document.createElement('section');

// Give section element a class of grid
grid.setAttribute('class', 'grid');

// Append the grid section to the game-goard div
game.appendChild(grid);

// Loop throught each item in our cards array
for (let i = 0; i < gameGrid.length; i++) {
    // create a div element and assign to variable card
    let card = document.createElement('div');

    // Apply a card class to that div
    card.classList.add('card');

    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = gameGrid[i].name;

    // Create front of card
    let front = document.createElement('div');
    front.classList.add('front');

    // Create back of card
    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    // Apply the background image of the div to the cardsArray image
    // card.style.backgroundImage = `url(${gameGrid[i].img})`;

    // Append the div to the grid section
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

let firstGuess = '';
let secondGuess = '';

// Set count to 0
let count = 0;
let previusTarget = null;
let delay = 1200;

// Add match CSS
let match = function() {
    let selected = document.querySelectorAll('.selected');

    // loop through the array like object containing `selected` class
    for (let index = 0; index < selected.length; index++) {
        selected[index].classList.add('match');
    }
}

// Reset guesses after two attempts
var resetGuesses = function() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previusTarget = null;

    let selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index++) {
        selected[index].classList.remove('selected');

    }
}

// Add event listener to grid
grid.addEventListener('click', function(event) {
    // The target event property returns the element that triggered the event.
    // console.log(event);
    // Declare variable to target our clicked item
    let clicked = event.target;

    // Do not allow the grid section itself to be selected
    // only select divs inside the grid
    if (clicked.nodeName === 'SECTION' || clicked === previusTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }

    // We want to add `selected` class if the current count is less than 2
    if (count < 2){
        count++;

        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            // Assign second guess
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }

        // If both guesses are not empty
        if(firstGuess !== '' && secondGuess !== '') {
            // And the firstGuess matched secondGuess
            if(firstGuess === secondGuess) {
                setTimeout(match, delay)
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previusTarget = clicked;
    }
});

