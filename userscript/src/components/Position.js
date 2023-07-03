import React from 'react';
import classnames from 'classnames';
import './Position.css';

const Position = ({ symbol, lotSize, pnl, close }) => {
  const pnlClassName = classnames({
    positions__element__text: true,
    'positions__element__text--profit': pnl >= 0,
    'positions__element__text--loss': pnl < 0,
  });

  return (
    <div className='positions__element'>
      <p className='positions__element__text'>{symbol}</p>
      <p className='positions__element__text'>{lotSize}</p>
      <p className={pnlClassName}>{pnl}</p>
      <div className='positions__element__close' onClick={() => close(symbol)}>
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <path
            fill='currentColor'
            d='M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Position;
