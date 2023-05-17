var Account = /** @class */ (function () {
    function Account(name) {
        this.balance = 0;
        this.id = this.generateId();
        this.name = name;
    }
    Account.prototype.generateId = function () {
        return Math.random().toString(36).substring(2, 9);
    };
    Account.prototype.createAccount = function () {
        var account = new Account(this.name);
        return account;
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            throw new Error("Insufficient funds");
        }
    };
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
// Usage
var account = new Account("John Doe");
account.deposit(0);
console.log("Account:", account);
