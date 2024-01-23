import React from 'react';

function PortfolioCategory({ title, children }) {
  return (
    <div className={title}>
      <h3>{title}</h3>
      <div className="port-items-div">
      {children}
      </div>
    </div>
  );
}

export default PortfolioCategory;