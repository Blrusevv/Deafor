function solve() {

    let randomNum = Math.floor(Math.random() * 101);
    let userGuess = parseInt(prompt('Guess the number between 1 and 100:'));

    let counter = 0;

    while(userGuess !== randomNum) {
        counter++;

        if(userGuess === randomNum) {
            alert('That is right you guessed it!');
            break;
        }

        if(counter === 10) {
            alert('Sorry, you reached the limit of guesses');
            break;
        }

        if(userGuess < randomNum) {
            userGuess = parseInt(prompt('Too low, try again:'));
        } else {
            userGuess = parseInt(prompt('Too high, try again:'));
        }
    }
}

solve();