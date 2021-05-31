import React, { useState } from 'react';
import './/Switcher.scss';

const Switcher = (props) => {

  

  return (
    <div className={`switcher ${props.switchBtn ? 'active' : ''}`}>
      <span className="switcher__roadmap">Roadmap</span>
      <div
        onClick={()=>{props.change();}}
        className="switcher__btn">
        <div
          className="switcher__dot switcher__dot-active"
        ></div>
      </div>
      <span className="switcher__board">Board</span>
    </div>
  );
};

export default Switcher;
