import React from 'react';
import './Coin.css';

export const ColumnHeader = () => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>🪙CRYPTO</h1>
          <p className="coin-symbol">SYMBOL</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">PRICE</p>
          <p className="coin-volume">VOLUME</p>

          <p>Price Change</p>

          <p className="coin-marketcap">MARKET CAP</p>
        </div>
      </div>
    </div>
  );
};
