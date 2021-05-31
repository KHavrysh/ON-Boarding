import React, { useState } from 'react';
import './Assignee.scss';
import Avatar1 from './../../../../images/AvatarCard.svg';
import Avatar2 from './../../../../images/AvatarCard3.svg';
import Avatar3 from './../../../../images/AvatarCard4.svg';

const Assignee = (props) => {

  let usersList = [
    {id:1, name:'Kate Havrysh', avatar: Avatar1},
    {id:0, name:'Andriana Smit', avatar: Avatar2},
    {id:2, name:'Alex Krynytskyi', avatar: Avatar3}
  ]

  let userList2 = [
    {id:2, name:'Alex Krynytskyi', avatar: Avatar3},
    {id:1, name:'Kate Havrysh', avatar: Avatar1},
    {id:0, name:'Andriana Smit', avatar: Avatar2},
  ]

  let [changeAssignee, setChangeAssigne] = useState(false);
  let [users, setUsers] = useState( props.buddy ? usersList : userList2);

  function changeUser(index) {
    setAssigne(index);
    setChangeAssigne(changeAssignee = !changeAssignee);
  }

  function setAssigne(position) {
    let newList = [];
    users.forEach((user, index)=>{
      if(index !== position) {
        newList.push(user)
      }
    })
    newList.unshift(users[position]);

    setUsers(newList);
  }

  return (
    <div className="assignee">
      <span className="assignee__title">Assignee</span>
      <div className="assignee__user">
        <div className={`assignee__wrap ${ changeAssignee ? ' assignee-active' : ''}`}>
         {users.map(({id, name, avatar}, index)=>{
           return (
            <div
              key={id}
              onClick={()=>{changeUser(index)}}
              className="assignee__info-wrap">
              <img src={avatar} alt="img" />
              <span>{name}</span>
            </div>
           )
         })}
        </div>
      </div>
    </div>
  )
};

export default Assignee;
