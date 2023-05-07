function solve() {

    let randomNum = Math.floor(Math.random() * 11);
    let userGuess = parseInt(prompt('Guess the number between 1 and 10:'));

    while(userGuess !== randomNum) {
        userGuess = parseInt(prompt('Almost there, try again:'));

        if(userGuess === randomNum) {
            alert('That is right you guessed it!');
            break;
        }
    }
}