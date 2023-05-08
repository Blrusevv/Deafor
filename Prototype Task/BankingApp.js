function BankAccount(accHolder, balance) {
        this.account = accHolder;
        this.balance = balance;
    };

    BankAccount.prototype.deposit = function(amount) {
        this.balance += amount;
        alert(`Deposit successful. Current balance: ${this.balance}`)
    }

    BankAccount.prototype.withdraw = function(amount) {
        if(this.balance > amount) {
            this.balance -= amount;
            alert(`Withdraw successful. Current balance: ${this.balance}`)
        } else {
            alert('Withdraw maximum exceeded')
    }
}

let accounts = [];

let submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', (ev) => {
    ev.preventDefault();

    let accHolder = document.querySelector('#account-name').value;
    let balance = parseInt(document.querySelector('#balance').value);

    let newAcc = new BankAccount(accHolder, balance);
    console.log(newAcc);
    accounts.push(newAcc);

    let depositFunc = document.querySelector('#deposit-field');
    let withdrawFunc = document.querySelector('#withdraw-field');

    depositFunc.removeAttribute('hidden');
    withdrawFunc.removeAttribute('hidden');
});

    let depositBtn = document.querySelector('#deposit-btn');
    let withdrawBtn = document.querySelector('#withdraw-btn');

    depositBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        let depositAmount = parseInt(document.querySelector('#deposit').value);
        accounts[accounts.length - 1].deposit(depositAmount);
    });

    withdrawBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        let withdrawAmount = parseInt(document.querySelector('#withdraw').value);
        accounts[accounts.length - 1].withdraw(withdrawAmount);
    });