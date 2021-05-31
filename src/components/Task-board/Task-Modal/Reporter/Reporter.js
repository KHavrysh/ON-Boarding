import React from 'react';
import './Report.scss';
import Avatar from './../../../../images/AvatarCard4.svg'

const Reporter = () => {
  return (
    <div className="reporter">
      <span className="reporter__title">Reporter</span>
      <div className="reporter__wrap-user">
        <img src={Avatar} alt="img" />
        <span>Alex Krynytskyi</span>
      </div>
    </div>
  );
};

export default Reporter;
