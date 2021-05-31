import React from 'react';
import './Notification.scss';
import Search from '../../images/notification-icons/search_major.svg';
import Email from '../../images/notification-icons/email_major.svg';
import Ring from '../../images/notification-icons/Group 1.svg';
import Buddy from '../../images/Avatar-4.svg';
import Arrow from '../../images/arrow.svg';

const Notification = (props) => {
    return (
        <div className="notification">
          <img src={Search} alt="img"/>
          <img src={Ring} alt="img"/>
          <img src={Email} alt="img"/>
          {props.buddy ?  <div className="notification__boddy">
            <img className="notification__avatar" src={Buddy} alt="img"/>
            <span>Your Buddy</span>
            <img src={Arrow} alt="img"/>
          </div>: null}
        </div>
    );
};

export default Notification;
