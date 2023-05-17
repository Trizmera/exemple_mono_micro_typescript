"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
// BankAccount.ts
class BankAccount {
    constructor(id, ownerId, balance) {
        this.id = id;
        this.ownerId = ownerId;
        this.balance = balance;
    }
}
exports.BankAccount = BankAccount;
