import React from 'react';
import './Priority.scss';
import PriorityArrow from './../../../svg-icons/PriorityArrow';

const Priority = () => {
  return (
    <div className="priority">
      <span className="priority__title">Priority</span>
      <div className="priority__wrap">
        <PriorityArrow />
        <span>Hight</span>
      </div>
    </div>
  );
};

export default Priority;
