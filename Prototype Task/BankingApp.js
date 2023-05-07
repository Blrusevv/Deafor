function BankAccount() {
        this.account = document.querySelector('#account-holder');
        this.balance = document.querySelector('#balance');
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