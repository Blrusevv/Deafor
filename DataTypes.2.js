function solve() {

    const str = prompt('Input string:');
    const letter = prompt('Input letter to search');

    let counter = 0;

    const strAsArr = str.split('');

    for (let i = 0; i < strAsArr.length; i++) {
        
        const symbol = strAsArr[i];
        if(symbol.toUpperCase() === letter || symbol.toLowerCase() === letter) {
            counter++;
        }
        
    }

    alert(counter);
}

solve();