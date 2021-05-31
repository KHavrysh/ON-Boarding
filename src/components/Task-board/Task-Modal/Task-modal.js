import React, { useState } from 'react';
import './Task-modal.scss';
import Close from './../../../images/task-icon/cancel.svg';
import Avatar from '../../../images/Avatar-1.svg';
import StatusBtn from './Status-btn/Status-btn';
import Assignee from './Assignee/Assignee';
import Priority from './Priority/Priority';
import Date from './Date/Date';
import Reporter from './Reporter/Reporter';

const TaskModal = (props) => {

  let [showBtn, setShowBtn] = useState(false);
  let allBtn = props.buddy ? [
    { id:0, name: 'In progres', status: 'progres'},
    { id:2, name: 'Done', status: 'done'},
    { id:1, name: 'In Review (Q&A)', status: 'review'},
    { id:3, name: 'To Do', status: 'todone'},
  ] :
  [
    { id:1, name: 'In Review (Q&A)', status: 'review'},
    { id:0, name: 'In progres', status: 'progres'},
    { id:2, name: 'Done', status: 'done'},
    { id:3, name: 'To Do', status: 'todone'},
  ]

  let [btns, setBtns] = useState(allBtn);

  function changeStatus(position) {
    let arrBtn = []

    btns.forEach((element, index) => {
      if(index !== position) {
        arrBtn.push(element)
      }
    });

    arrBtn.unshift(btns[position])

    setBtns(arrBtn)
    setShowBtn( showBtn = !showBtn )
  }
  
  return (
    <div className={`modal ${ props.activeModal ? 'modal-active' : "" }`}>
      <div className="modal__wrap">
        <div className="modal__header">
          <span><span className="modal__task-name">ON-50</span> /  Sign Up Flow</span>
          <img src={Close} alt="img"
            onClick={()=>{props.closeModal()}}
          />
        </div>
        <div className="modal__main">
          <div className="modal__description">
            <span className="modal__description-title">Description</span>
            <span className="modal__description-text">
            Create a sign up page, modal, form, or an app screen related to signing up for something.

            It could be for a volunteer event, contest registration, a giveaway, or anything you can image.
            </span>
            <div className="modal__comments">
              <span className="modal__comments-title">Comments</span>
              <div className="modal__comment">
                <img src={Avatar} alt="img" />
                <div className="modal__comment-text-wrap">
                  <span className="modal__comment-title">
                    <span className="modal__coment-name">Kate Havrysh</span> 
                    <span className="modal__coment-date"> June 15</span>
                  </span>
                  <span>Here’s a link to my notes and video</span>
                </div>
              </div>
              <div className="modal__input-wrap">
                <img src={Avatar} alt="img" />
                <textarea
                className="modal__text-area"
                placeholder="Add Comment"
                >
                </textarea>
              </div>
            </div>
          </div>
          <div className="modal__status">
            <div className="modal__btn-position">
              <StatusBtn
                btns={btns}
                showBtn={showBtn}
                changeStatus={(index)=>{changeStatus(index) }}
                changeCardPosition={(name)=>{props.changeCardPosition(name)}}
                changeProgresBar={(name)=>{props.changeProgresBar(name)}}
              />
            </div>
            <Assignee buddy={props.buddy} />
            <Priority />
            <Date />
            <Reporter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
