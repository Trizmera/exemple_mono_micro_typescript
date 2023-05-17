// main.ts
import { UserService } from './UserService';
import { BankAccountService } from './BankAccountService';
import { User } from './User';
import { BankAccount } from './BankAccount';

function main() {
  const userService = new UserService();
  const bankAccountService = new BankAccountService();

  const user = userService.createUser("John Doe");
  const bankAccount = bankAccountService.createBankAccount(user.id);

  console.log("Created user:", user);
  console.log("Created bank account:", bankAccount);
}

main();
