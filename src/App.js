import React, { useState } from 'react';
import './App.css';
import expenses from './utils/expenses';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import TotalBalance from './components/TotalBalance/TotalBalance';
import AddTransaction from './components/AddTransaction/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState(expenses.get());

  function updateTransactionHandler(transactions) {
    expenses.update(transactions);
    setTransactions(expenses.get());
  }

  // Remove transaction by ID
  function removeTransactionHandler(id) {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    updateTransactionHandler(newTransactions);
  }

  return (
    <div className="App">
      <h2>Expense Tracker</h2>

      <div className="container left">
        <TotalBalance transactions={transactions} />

        <AddTransaction
          transactions={transactions}
        />
      </div>
      <div className="container right">
        <TransactionHistory
          transactions={transactions}
          removeTransactionHandler={removeTransactionHandler}
        />
      </div>
    </div>
  );
}

export default App;