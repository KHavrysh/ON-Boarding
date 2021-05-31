import React from 'react';
import './Card-task.scss';
import Icon from '../../../images/tasks/task-type (1).svg';
import Avatar from '../../../images/body-img.png';

const CardTask = (props) => {
  return (
    <div
      draggable="true"
      className={`card 
      ${props.id === props.idHover ? "card-hover" : ""}
      ${props.id === props.dragItem ? "drag-card" : ""}
      `}
      onDragStart={(event) => { props.dragStart(event); }}
      onDragOver={(event) => { props.dragOver(event); }}
      onDragLeave={(event) => { props.dragLeave(event); }}
      onDragEnd={() => { props.dragEnd(); }}
      onDrop={(event) => { props.dragDrop(event); }}
      onClick={()=>{props.showModal(); }}
    >
      <span className="card__name">{props.name}</span>
      <div className="card__info">
        <img src={Icon} alt="img" />
        <span>{props.task}</span>
        <img src={Avatar} alt="img" />
      </div>
    </div>
  );
};

export default CardTask;
