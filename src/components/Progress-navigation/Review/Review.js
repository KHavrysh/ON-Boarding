import React from 'react';
import './Review.scss';
import TaskIcon from './../../../images/tasks/task-type (1).svg'


const Review = (props) => {
  return (
    <div className="on-review">
      <img src={props.avatar} alt="img" />
      <div className="on-review__wrap">
        <img src={TaskIcon} alt="img" />
        <span><span className="on-review__task">{props.task}</span> / {props.taskName}</span>
      </div>
      
    </div>
  );
};

export default Review
