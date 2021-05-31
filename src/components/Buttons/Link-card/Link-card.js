import React from 'react';
import './Link-card.scss';
import { Link } from 'react-router-dom';

const LinkCard = (props) => {
  return (
    <Link
      className={`
        link-card
        is-small
        ${props.link === props.local ? 'is-active' : ''}
      `}
      to={props.link}
      onClick={() => {
        props.activateLink();
      }}
    >
      {props.icon}
      <span>{props.linkName}</span>
    </Link>
  );
};

export default LinkCard;
