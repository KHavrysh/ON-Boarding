import React from 'react';
import Notification from '../Notification/Notification';
import './Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <span className="header__user">{props.title}</span>
      <Notification buddy={props.buddy}/>
  </header>
  );
};

export default Header;
