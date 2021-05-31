import React from 'react';
import './List-column.scss';

const ListColumn = (props) => {
  return (
    <div className='column'
    onDrop={(event)=>{props.colDrop(event)}}
    onDragOver={(event)=>{props.colOver(event)}}
    >
      <span className="column__title">{props.title}</span>
      {props.children}
    </div>
  )
}

export default ListColumn;
