//Question -1 
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Current count: ${count}`);
    },
    getCount: function() {
      return count;
    }
  };
}
const counter = createCounter();
console.log("Counter 1 Operations");
counter.increment(); 
counter.increment();  
counter.decrement();  
console.log(`Final count (using getCount): ${counter.getCount()}`);

//Question - 2
function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];
  const recordTransaction = (type, amount, newBalance) => {
    const timestamp = new Date().toLocaleTimeString();
    transactionHistory.push({ type, amount, newBalance, timestamp });
  };

  return {

    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        recordTransaction('deposit', amount, balance);
        console.log(`Deposited: ${amount}. New balance: ${balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    },
    withdraw: function(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (balance >= amount) {
        balance -= amount;
        recordTransaction('withdrawal', amount, balance);
        console.log(`Withdrawn: ${amount}. New balance: ${balance}`);
      } else {
        console.log(`Insufficient balance. Attempted withdrawal: ${amount}. Current balance: ${balance}`);
      }
    },
    getBalance: function() {
      return balance;
    },
    getHistory: function() {
        return transactionHistory;
    }
  };
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400);
console.log(account.balance); 
