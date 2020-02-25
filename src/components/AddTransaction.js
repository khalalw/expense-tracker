import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      // eslint-disable-next-line no-bitwise
      id: ~~(Math.random() * 100000000),
      amount: Number(amount),
      text
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            Text
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
}
