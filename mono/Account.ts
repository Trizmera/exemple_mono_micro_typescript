class Account {
    private id: string;
    private name: string;
    private balance: number = 0;

    constructor(name: string) {
      this.id = this.generateId();
      this.name = name;
    }
  
    private generateId(): string {
      return Math.random().toString(36).substring(2, 9);
    }
  
    createAccount(): Account {
      const account = new Account(this.name);
      return account;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        throw new Error("Insufficient funds");
      }
    }
  
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  // Usage
  const account = new Account("John Doe");
  account.deposit(0);
  
  console.log("Account:", account);
  