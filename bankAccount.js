function createBankAccount() {
  let balance = 0;
  const history = [];

  return {
    deposit(amount) {
      if (amount <= 0) return "Invalid amount";
      balance += amount;
      history.push({ type: "deposit", amount });
    },
    withdraw(amount) {
      if (amount <= 0) return "Invalid amount";
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      history.push({ type: "withdraw", amount });
    },
    getBalance() {
      return balance;
    },
    getTransactionHistory() {
      return history;
    }
  };
}