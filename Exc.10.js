function solve() {

    let sentence = prompt('Enter your sentence:');
    let vowelCount = sentence.match(/[aeiou]/gi).length;

    alert(`The number of vowels is ${vowelCount}`);
}

solve();