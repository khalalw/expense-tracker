import React from 'react';
import PropTypes from 'prop-types';

export default function Transaction({ transaction: { text, amount } }) {
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {sign}${Math.abs(amount)}
      </span>
      <button type="button" className="delete-btn">
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
    amount: PropTypes.number
  })
};
