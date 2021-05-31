import React from 'react'
import './Comment.scss';
import CheckBox from './../../../images/tasks/task-type (1).svg';

const Coment = (props) => {
  return (
    <div className="comment">
      <img className="comment__img" src={props.avatar} alt="img" />
      <div className="comment__messge-wrap">
        <div className="comment__user">
          <img src={CheckBox} alt="img" />
          <div className="comment__info">
            <span>{props.task}</span>
            <span>{props.taskName}</span>
          </div>
        </div>
        <span className="comment__message">
          {props.message}
        </span>
      </div>
    </div>
  );
};

export default Coment;
