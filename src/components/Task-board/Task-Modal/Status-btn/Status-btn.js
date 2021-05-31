import React, { useState } from 'react';
import './Status-btn.scss';
import CollapsArrow from './../../../svg-icons/Collaps-arrow';

const StatusBtn = (props) => {

 
  return (
    <div className={`status-btn-wrap ${props.showBtn ? 'active-wrap' : ''}`}>
      {props.btns.map(({id,name, status}, index)=>{
        return (
          <div 
            key={id}
            className={`status-btn ${status}`}
            onClick={()=>{props.changeStatus(index); props.changeCardPosition(name); props.changeProgresBar(name)}}
          >
            {name}
            {index === 0 ? <div className="collaps-arrow">
              <CollapsArrow/>
            </div> : ''}
          </div>
        )
      })}
    </div>
  );
};

export default StatusBtn
