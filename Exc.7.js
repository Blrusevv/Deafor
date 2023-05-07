function solve() {

    let num = parseInt(prompt('Type in number:'));
    let result = num % 2 == 0 ? 'even' : 'odd';

    alert(result);
}

solve();