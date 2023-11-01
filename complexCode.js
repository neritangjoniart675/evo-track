/**
 * Filename: complexCode.js
 *
 * Description: This code demonstrates a complex JavaScript application that simulates a bank account management system.
 * It includes various functions to perform operations such as creating accounts, depositing and withdrawing funds, transferring funds, etc.
 * The code is divided into different modules and uses ES6 features like classes, arrow functions, destructuring, spread syntax, etc.
 * Please note that this is a simplified example and is not production-ready.
 * 
 * Author: YourName
 */

// Bank Account class representing a user account
class BankAccount {
  constructor(name, accountNumber, initialBalance) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`+ ${amount}`);
    console.log(`Successfully deposited $${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(`- ${amount}`);
      console.log(`Successfully withdrew $${amount}`);
    } else {
      console.log(`Insufficient funds. Current balance: $${this.balance}`);
    }
  }

  transfer(amount, recipientAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(`- ${amount}`);
      recipientAccount.balance += amount;
      recipientAccount.transactions.push(`+ ${amount}`);
      console.log(`Successfully transferred $${amount} to account ${recipientAccount.accountNumber}`);
    } else {
      console.log(`Insufficient funds for transfer. Current balance: $${this.balance}`);
    }
  }

  printStatement() {
    console.log(`Account Statement for ${this.name} (Account Number: ${this.accountNumber})`);
    console.log(`Current Balance: $${this.balance}`);
    console.log("--- Transactions ---");
    for (let transaction of this.transactions) {
      console.log(transaction);
    }
    console.log("--- End of Statement ---");
  }
}

// Utility to generate a random account number
function generateAccountNumber() {
  return Math.floor(Math.random() * 1000000000);
}

// Main program execution
console.log("--- Bank Account Management System ---");

// Create accounts
const account1 = new BankAccount("John Doe", generateAccountNumber(), 5000);
const account2 = new BankAccount("Jane Smith", generateAccountNumber(), 10000);

// Perform transactions
account1.deposit(2000);
account1.withdraw(1000);
account2.deposit(500);
account2.transfer(200, account1);

// Print account statements
account1.printStatement();
account2.printStatement();