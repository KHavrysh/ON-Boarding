import React, { Fragment as div, useState } from 'react';
import './Epick.scss';
import Arrow from "../../../images/tasks/arrow-down_major.svg";
import TaskIcon from "../../../images/tasks/task-type.svg";
import TaskIconBlue from "../../../images/tasks/task-type (1).svg";
import Avatar from "../../../images/tasks/avatar.png";


const Epick = (props) => {

  const tasks = [
    {id:1, title: 'Acquaintance with the project', procent:95, subTask:[
      {id:0, title: 'Sign Up Flow', progres: true, avatar: Avatar},
      {id:1, title: 'Get a to-do list for the week', progres: false, avatar: Avatar},
      {id:2, title: 'Kick off meeting', progres: false, avatar: Avatar},
    ] },
    {id:2, title: 'Equipment and access', procent:100, subTask:[
      {id:0, title: 'Sign Up Flow', progres: true, avatar: Avatar},
      {id:1, title: 'Get a to-do list for the week', progres: true, avatar: Avatar},
      {id:2, title: 'Kick off meeting', progres: true, avatar: Avatar},
    ] }
]

  let [hideSub, setHideSub] = useState(tasks[0].title)

  function hide(title) {
    hideSub === title ? setHideSub('') : setHideSub(title);
  }

    return (
        <div className="epick">
          {tasks?.map(({id, title, procent, subTask })=>{
            return (
              <div key={id}>
                <div onClick={()=>{hide(title)}} className="epick__header">
                  <img className={`epick__arrow ${hideSub === title ? 'epick__arrow-open' : ''}`} src={Arrow} alt="img" />
                  <img src={TaskIcon} alt="img" />
                  <span>{title}</span>
                </div>
                <div className="epick__bar">
                  <div className="epick__procent"><div className={`${procent === 100 ? 'epick__done' : ''}`}></div></div>
                  <span>{procent}%</span>
                </div>
                <div className={`epick__sub-wrap ${ hideSub === title ? 'epick__show' : 'epick__hide'}`}>
                  {subTask?.map(({title, progres, avatar, id})=>{
                    return (
                      <div key={id} className="epick__sub-task">
                        <div>
                          <img src={TaskIconBlue} alt="img" />
                          <span>{title}</span>
                        </div>
                        <div>
                          <button className={`epick__status ${ progres ? 'epick__status-done' : 'epick__status-progres'}`}>
                            {progres ? 'Done' : 'In progress'}
                            </button>
                          <img src={avatar} alt="img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
    );
};

export default Epick;
