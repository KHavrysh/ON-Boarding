import React from 'react';
import './User-icons.scss';
import userIcon1 from './../../../images/Avatar-1.svg';
import userIcon2 from './../../../images/user-icons-bar/mentee-2.svg';
import userIcon3 from './../../../images/user-icons-bar/mentee-3.svg';
import userIcon4 from './../../../images/user-icons-bar/mentee-4.svg';
import userIcon5 from './../../../images/user-icons-bar/mentee-5.svg';
import userIcon6 from './../../../images/user-icons-bar/mentee-6.svg';

const UserIcons = (props) => {

  let users = [
    {id:0, icon: userIcon1},
    {id:1, icon: userIcon2},
    {id:2, icon: userIcon3},
    {id:3, icon: userIcon4},
    {id:4, icon: userIcon5},
    {id:5, icon: userIcon6},
  ]
  return (
    <div className="user-icons">
      {users.map(({id, icon})=>{
        return (
          <img className={`user-icons__img ${id === props.activeUser ? 'user-icons__active' : ''} ${id === props.hideUser ? 'user-icons__hide' : ''}`} key={id} src={icon} alt="img" />
        )
      })}
    </div>
  );
};

export default UserIcons
