import React from 'react';
import './Progres-btn.scss';
import Icon from '../../../images/task-icon/task-type.svg'

const ProgresBtn = (props) => {
  return (
    <div className="progres-btn">
      <div className="progres-btn__wrap">
        <img src={Icon} alt="img" />
        <span className="progres-btn__text">{props.children}</span>
      </div>
      <div className="progres-btn__procent-wrap">
        <div className="progres-btn__progres">
          <div className={`progres-btn__progres-line ${props.procent === 100 ? 'progres-btn__progres-line-done' : '' }`}>
          </div>
        </div>
        <span>{props.procent}%</span>
      </div>
    </div>
  );
};

export default ProgresBtn;
