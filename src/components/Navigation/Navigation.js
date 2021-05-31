import React, { useState, useEffect } from 'react';
import LinkCard from './../Buttons/Link-card/Link-card';
import './Navigation.scss';
import Avatar1 from './../../images/Avatar-1.svg';
import Avatar2 from './../../images/Avatar-4.svg';



import CloseIcon from '../../images/navigation-icons/nav-close-icon.svg';


const Navigation = (props) => {
  let [linkId, setLinkId] = useState(document.location.pathname);
  let [small, setSmall] = useState(false);

  function activateLink(id) {
    setTimeout(() => {
      let url = document.location.pathname.split('/')[1];
      if (url === ' ') {
        url = '/'
      }
      setLinkId(`/${url}`);
    }, 1);

  }

  useEffect(() => {
    activateLink()
  })

  function smallNav(params) {
    setSmall(small = !small)
  }

  return (
    <nav className={`navigation ${small ? 'nav-small' : ''}`}>
      <div
        onClick={smallNav}
        className="navigation__close">
        <img src={CloseIcon} alt="img" />
      </div>
     <div className="navigation__user-wrap">
      <img className="navigation__avatar" src={props.buddy ? Avatar1 : Avatar2} alt="img" />
      <span className="small-name">{props.buddy ? 'Kate Havrysh' : 'Alex Krynytskty'}</span>
     </div>
      <ul className="navigation__list">
        {props.navList.map(({ id, linkName, url, icon }) => {
          return (
            <li key={id}>
              <LinkCard
                linkName={linkName}
                local={linkId}
                activateLink={() => {
                  activateLink();
                }}
                link={url}
                icon={icon}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
