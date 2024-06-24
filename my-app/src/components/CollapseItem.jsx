import React, { useState } from 'react';


const CollapseItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-item">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <button className="collapse-toggle">{isOpen ? '▲' : '▼'}</button>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapseItem;
