import React, { useState } from 'react';
import Switcher from '../Buttons/Switcher/Switcher';
import './Progress-bar.scss';
import UserIcons from './User-icons/User-icons';

const ProgresBar = (props) => {

  return (
    <div className="progress-bar">
     {props.buddy ?
      <div className="progress-bar__procent procent">
      <span className="procent__text">Probation progress</span>
      <div className="procent__bar"><div className={props.review ? 'procent__default' : 'procent__finish'}></div></div>
      <span className="procent__number">{props.review ? '98%' : '100%'}</span>
    </div> :
      <UserIcons hideUser={props.hideUser} activeUser={props.activeUser} />
    }
      <Switcher
       switchBtn={props.boardStatus}
       change={()=>{props.change()}}
      />
      {!props.buddy ? <div className={`progress-bar__person ${props.active !== 0 ? 'progress-bar__person-hide' : ''}`}>
        <span className="progress-bar__person-name">Kate Havrysh</span>
        <span className="progress-bar__person-text"> Probation progress</span>
        <div className="progress-bar__person-procent"><div></div></div>
        <span>98%</span>
      </div> : null}
    </div>
  );
};

export default ProgresBar;
