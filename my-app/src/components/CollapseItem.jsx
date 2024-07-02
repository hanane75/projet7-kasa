import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';




const CollapseItem = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);




  const toggleCollapse = () => {

    setIsOpen(!isOpen);

  };




  return (

    <div className="collapse-item">

      <div className="collapse-header" onClick={toggleCollapse}>

        <h2>{title}</h2>

        <button className="collapse-toggle">

          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />

        </button>

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
