function solve() {

    const dob = prompt('Please enter your year of birth:');

    const current = new Date().getFullYear();
    const age = current - dob;

    alert(`You are ${age} years old`);
}

solve();