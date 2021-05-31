import React from 'react';
import './Road-task.scss';
import Epic from './../../../images/task-icon/epic_major.svg';
import Avatar from './../../../images/Avatar-1.svg'

const RoadTask = (props) => {
  return (
    <div className={`task ${ props.hideUserTask === props.id ? 'hide-task-user' : ''}`} onClick={()=>{props.selectuser()}}>
      {props.buddy ?  <div className="task__name">
        <img src={Epic} alt="img" />
        <span className="task__number">
          ON-{props.number}
          <span className="task__name-style">  {props.name}</span>
        </span>
      </div> :  <div className="task__user">
        <img className="task__avatar" src={props.avatar} alt="img" />
        <div className="task__user-name-wrap">
          <span>{props.name}</span>
          <span>{props.prof}</span>
        </div>
      </div> }

      <div className="task__road">
        <div className={`task__info ${props.procent === '' ? 'task__info-done' : ''}`}>
          <div className="task__procent">
            {props.procent === '' ? 
              <img className="task__img" src={props.img} alt="alt" />
             : 
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                  <path d="M24 2.64118C24 1.1825 25.1862 -0.0150488 26.636 0.14513C31.9044 0.727167 36.86 3.04194 40.7019 6.76497C45.1792 11.1038 47.7923 17.0146 47.9882 23.2461C48.184 29.4777 45.9471 35.541 41.7511 40.1523C37.5551 44.7637 31.7293 47.5612 25.507 47.9526C19.2846 48.3441 13.1541 46.2988 8.41324 42.2497C3.67237 38.2006 0.693242 32.4656 0.106512 26.2586C-0.480219 20.0516 1.3715 13.8599 5.26968 8.99417C8.61463 4.81899 13.2411 1.90135 18.3949 0.663613C19.8133 0.322982 21.1402 1.36242 21.323 2.8096C21.5059 4.25679 20.4727 5.5599 19.0656 5.94442C15.2727 6.98093 11.8785 9.19349 9.3922 12.2969C6.352 16.0917 4.90785 20.9206 5.36544 25.7615C5.82303 30.6023 8.14645 35.0751 11.8439 38.233C15.5413 41.3909 20.3225 42.986 25.1753 42.6807C30.0281 42.3754 34.5717 40.1936 37.8441 36.5972C41.1166 33.0008 42.8611 28.2721 42.7084 23.4121C42.5557 18.552 40.5177 13.9422 37.0258 10.5584C34.1702 7.79103 30.5254 6.02132 26.6325 5.46835C25.1884 5.26321 24 4.09987 24 2.64118Z" />
                </mask>
                <path d="M24 2.64118C24 1.1825 25.1862 -0.0150488 26.636 0.14513C31.9044 0.727167 36.86 3.04194 40.7019 6.76497C45.1792 11.1038 47.7923 17.0146 47.9882 23.2461C48.184 29.4777 45.9471 35.541 41.7511 40.1523C37.5551 44.7637 31.7293 47.5612 25.507 47.9526C19.2846 48.3441 13.1541 46.2988 8.41324 42.2497C3.67237 38.2006 0.693242 32.4656 0.106512 26.2586C-0.480219 20.0516 1.3715 13.8599 5.26968 8.99417C8.61463 4.81899 13.2411 1.90135 18.3949 0.663613C19.8133 0.322982 21.1402 1.36242 21.323 2.8096C21.5059 4.25679 20.4727 5.5599 19.0656 5.94442C15.2727 6.98093 11.8785 9.19349 9.3922 12.2969C6.352 16.0917 4.90785 20.9206 5.36544 25.7615C5.82303 30.6023 8.14645 35.0751 11.8439 38.233C15.5413 41.3909 20.3225 42.986 25.1753 42.6807C30.0281 42.3754 34.5717 40.1936 37.8441 36.5972C41.1166 33.0008 42.8611 28.2721 42.7084 23.4121C42.5557 18.552 40.5177 13.9422 37.0258 10.5584C34.1702 7.79103 30.5254 6.02132 26.6325 5.46835C25.1884 5.26321 24 4.09987 24 2.64118Z" stroke="#1E71FF" strokeWidth="6" mask="url(#path-1-inside-1)" />
              </svg>
            }
            <span>{props.procent}{props.procent === '' ? '': '%'}</span>
          </div>
          <div className="task__text">
            <span>Task progres</span>
            <div className="task__progres">
              <div>
                <span className='task__progres-title'>Done</span>
                <span>{props.done}</span>
              </div>
              <div>
                <span className='task__progres-title'>Total</span>
                <span>{props.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadTask;
