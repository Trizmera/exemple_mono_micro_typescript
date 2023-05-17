// BankAccountService.ts
import { BankAccount } from './BankAccount';

export class BankAccountService {
  private bankAccounts: BankAccount[] = [];

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  createBankAccount(ownerId: string): BankAccount {
    const id = this.generateId();
    const balance = 0;
    const bankAccount = new BankAccount(id, ownerId, balance);
    this.bankAccounts.push(bankAccount);
    return bankAccount;
  }
}
