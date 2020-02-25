import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(({ amount }) => amount);
  const addAmounts = (acc, item) => acc + item;
  const income = amounts
    .filter(amount => amount > 0)
    .reduce(addAmounts, 0)
    .toFixed(2);
  const expense = amounts.filter(item => item < 0).reduce(addAmounts, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {`$${income}`}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {`$${Math.abs(expense)}`}
        </p>
      </div>
    </div>
  );
}
