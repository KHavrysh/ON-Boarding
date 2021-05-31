import React, { useState } from 'react';
import './Pagination.scss';
import Arrow from '../../svg-icons/Pagination-arrow';

const Pagination = (props) => {

  return (
    <div className="pagination">
      <div className="pagination__btn-wrap">
        <div className="pagination__arrow-wrap"  onClick={()=>{props.changePagination(1)}}>
          <Arrow
            className="pagination__arrow-left"
          />
        </div>
        <span
          className={`pagination__btn ${props.active ? 'active' : ''}`}
          onClick={()=>{props.changePagination(1)}}
        >
          1
        </span>
        <span
          className={`pagination__btn ${!props.active ? 'active' : ''}`}
          onClick={()=>{props.changePagination(2)}}
        >
          2
        </span>
        <div className="pagination__arrow-wrap" onClick={()=>{props.changePagination(2)}}>
          <Arrow
            className="pagination__arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
