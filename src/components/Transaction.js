import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

export default function Transaction({ transaction: { text, amount, id } }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {sign}${Math.abs(amount)}
      </span>
      <button type="button" className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
}

Transaction.defaultProps = {
  transaction: {}
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    text: PropTypes.string,
    amount: PropTypes.number,
    id: PropTypes.number
  })
};
