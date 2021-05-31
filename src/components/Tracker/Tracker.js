import React from 'react';
import './Tracker.scss';
import Play from './../../images/play.svg'

const Tracker = () => {
    return (
        <div className="tracker">
          <span className="tracker__title">Time Tracking</span>
          <span className="tracker__update">Design System update</span>
          <div className="tracker__timer">00:00:00</div>
          <img className="tracker__play" src={Play} alt="img" /> 
          <span>Start time entry</span>
        </div>
    );
};

export default Tracker;
