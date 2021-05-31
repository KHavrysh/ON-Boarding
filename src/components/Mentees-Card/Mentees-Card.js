import React, { Fragment as div } from 'react';
import './Mentees-Card.scss';
import AvatarCard  from './../../images/AvatarCard.svg';
import AvatarCard2  from './../../images/AvatarCard2.svg';
import AvatarCard3  from './../../images/AvatarCard3.svg';
import AvatarCard4  from './../../images/AvatarCard4.svg';
import Elips98 from '../../images/elips98.png';
import Elips78 from '../../images/elips78.png';
import Elips56 from '../../images/elips56.png';
import Elips10 from '../../images/elips10.png';

const MenteesCard = () => {

  let users = [
    {id: 0, avatar: AvatarCard, name: 'Kate Havrysh', prof: 'UX Designer', elips: Elips98, procent: '98', tasktoDO: '49', taskMax: '50'},
    {id: 1, avatar: AvatarCard2, name: 'Adriana Broady', prof: 'Researcher', elips: Elips78, procent: '78', tasktoDO: '40', taskMax: '50'},
    {id: 2, avatar: AvatarCard3, name: 'Jonatan Black', prof: 'UX Designer', elips: Elips56, procent: '56', tasktoDO: '28', taskMax: '50'},
    {id: 3, avatar: AvatarCard4, name: 'Alex Krynytskyi', prof: 'UX Designer', elips: Elips10, procent: '57', tasktoDO: '28', taskMax: '50'}
  ]
  return (
    <div className="mentee-card-wrap">
      {users.map(({id, avatar, name, prof, elips, procent, tasktoDO, taskMax})=>{
        return (
          <div key={id} className='mentee-card'>
          <img src={avatar} alt="img" />
          <span className="mentee-card__name">{name}</span>
          <span className="mentee-card__prof">{prof}</span>
          <div className="mentee-card__wrap">
            <img className="mentee-card__procent" src={elips} alt="img" />
            <span>{procent}%</span>
          </div>
          <span className="mentee-card__tasks">Tasks {tasktoDO} of {taskMax}</span>
        </div>
        )
      })}

    </div>
  );
};

export default MenteesCard
