function solve () {

    let bankAccount = {
        accountNumber: 101001,
        balance: 1430,
        accountHolder: 'Bogomil',
        deposit: function(amount) {
            this.balance += amount;
            console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
        },
        withdraw: function(amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
        }
    }

    bankAccount.deposit(500);
    bankAccount.withdraw(1000);
}

solve()
