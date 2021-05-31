import React, { useState } from 'react';
import './Road-map.scss';
import RoadTask from './Road-task/Road-task';
import TaskDone from './../../images/task-icon/task-done.svg'
import Pagination from './Pagination/Pagination';
import AvatartUser1 from './../../images/Avatar-1.svg';
import AvatartUser2 from './../../images/Avatar-2.svg';
import AvatartUser3 from './../../images/Avatar-3.svg';
import AvatartUser4 from './../../images/Avatar-4.svg';
import ProgresLine from '../../images/RoadProgresLine.svg'

const RoadMap = (props) => {

  let task = [
    {id: 5,name:'Acquaintance with the project', total: 50, done: 48, procent: 98, img: ''},
    {id: 4,name:'Trainings', total: 3, done: 3, procent: '', img: TaskDone},
    {id: 2,name:'Documentation', total: 5, done: 5, procent: '', img: TaskDone},
    {id: 3,name:'Acquaintance', total: 7, done: 7, procent: '', img: TaskDone},

    // {id: 3,name:'Documentation', total: 48, done: 50, procent: 98, img: ''},
    // {id: 4,name:'Acquaintance and documents signing', total: 50, done: 50, procent: '', img: TaskDone},
  ]

  let nextTask = [
    {id: 4,name:'Trainings', total: 3, done: 3, procent: '', img: TaskDone},
    {id: 2,name:'Documentation', total: 5, done: 5, procent: '', img: TaskDone},
    {id: 3,name:'Acquaintance', total: 7, done: 7, procent: '', img: TaskDone},
  ]

  let buddyTasks = [
    {id: 1,name:'Laura Kembel', prof: 'Content Writer', total: 50, done: 49, procent: 99, img: '', avatar: AvatartUser2},
    {id: 0,name:'Kate Havrysh', prof: 'UX Designer', total: 50, done: 48, procent: 98, img: '', avatar: AvatartUser1},
    {id: 2,name:'Max Loren', prof: 'UI Designer', total: 20, done: 18, procent: 96, img: '', avatar: AvatartUser3},
    {id: 3,name:'Steven Pierce', prof: 'SMM Maneger', total: 50, done: 48, procent: 98, img: '', avatar: AvatartUser4},
  ]

  let nexBuddyTasks = [
    {id: 1,name:'Super Kate', prof: 'UX Designer', total: 48, done: 50, procent: 98, img: '', avatar: AvatartUser1},
  ]

  let [roadTask, setRoadTask] = useState(props.buddy ? task  : buddyTasks);
  let [activeBtn, setActive] = useState(true);

  function changePagination(id) {
    if (id === 1) {
      setRoadTask(props.buddy ? task  : buddyTasks);
      setActive(true);
    } else {
      setRoadTask(props.buddy ?  nextTask:  nexBuddyTasks);
      setActive(false);
    }
  }

  return (
    <div className="road">
      <img className='road__progres-line' src={ProgresLine} alt="alt" />
      <div className="road__plan">
        <div className='road__tasks'>
          <span>{props.buddy ? 'Epic' : 'Mentees'}</span>
        </div>
        <div className="road__month-wrap">
          <div className="road__month-name">
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
            <span>JUL</span>
          </div>
          <div className="road__month-col-wrap">
            <div className='road__month'></div>
            <div className='road__month'></div>
            <div className='road__month'></div>
            <div className='road__month'></div>
          </div>
        </div>
      </div>
      <div className="road__tasks">
        {roadTask.map(({total, done, id, procent, img, name, avatar, prof})=>{
          return (
            <RoadTask
              total={total}
              done={done}
              key={id}
              number={id}
              procent={procent}
              img={img}
              name={name}
              buddy={props.buddy}
              prof={prof}
              avatar={avatar}
              selectuser={()=>{props.selectuser()}}
              id={id}
              hideUserTask={props.hideUserTask}
            />
          )
        })}
      </div>
      <Pagination active={activeBtn} changePagination={(id)=>{changePagination(id)}} />
    </div>
  )
}

export default RoadMap;
