import React from 'react';
import './Congratulation.scss';
import { Link } from 'react-router-dom';

const Congratulation = (props) => {
  return (
    <div className={`congratulation ${props.active ? 'active' : ''}`}>
      <div className="congratulation__wrap">
        <span className="congratulation__img">🎉</span>
        <span className="congratulation__title">Congradulations!</span>
        <span className="congratulation__text">{props.buddy ? 'Your Buddy closed the last task. You successfully finished your Onboarding' : ' Your mentee finished all task successfully. You can close his Onboarding'}</span>
        <div className="congratulation__procent">
          <span>Probation progress</span>
          <div className="congratulation__status-wrap">
            <div className="congratulation__status"></div>
            <span>100%</span>
          </div>
        </div>
        <Link
          className="congratulation__btn"
          onClick={()=>{props.closeCongrats(); props.setCareer(); props.change(); props.hideUsers()}}
          to={props.buddy ? '/career' : '/mentees'}
        >{props.buddy ? 'Cool, what’s next' : 'Complete Onboarding'}</Link>
      </div>
      
    </div>
  );
};

export default Congratulation;
