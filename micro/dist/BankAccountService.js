"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountService = void 0;
// BankAccountService.ts
const BankAccount_1 = require("./BankAccount");
class BankAccountService {
    constructor() {
        this.bankAccounts = [];
    }
    generateId() {
        return Math.random().toString(36).substring(2, 9);
    }
    createBankAccount(ownerId) {
        const id = this.generateId();
        const balance = 0;
        const bankAccount = new BankAccount_1.BankAccount(id, ownerId, balance);
        this.bankAccounts.push(bankAccount);
        return bankAccount;
    }
}
exports.BankAccountService = BankAccountService;
