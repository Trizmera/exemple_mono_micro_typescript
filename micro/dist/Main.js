"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const UserService_1 = require("./UserService");
const BankAccountService_1 = require("./BankAccountService");
function main() {
    const userService = new UserService_1.UserService();
    const bankAccountService = new BankAccountService_1.BankAccountService();
    const user = userService.createUser("John Doe");
    const bankAccount = bankAccountService.createBankAccount(user.id);
    console.log("Created user:", user);
    console.log("Created bank account:", bankAccount);
}
main();
