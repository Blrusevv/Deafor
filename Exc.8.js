function solve() {

    let word = prompt('Enter word here:');

    let result = word.charAt(0).toUpperCase() + word.slice(1);

    alert(result);
}

solve();