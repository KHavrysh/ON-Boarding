import React, { Fragment, useState } from 'react';
import './Progress-navigation.scss';
import ProgresBtn from './../Buttons/Progres-btn/Progres-btn';
import Avatar1 from './../../images/Avatar-4.svg';
import Avatar2 from './../../images/Avatar-2.svg'
import Coment from './Coment/Comment';
import Review from './Review/Review';

const ProgresNavigation = (props) => {

  let [comments, setComments] = useState(props.buddy ?  [
    {
      id:0,
      task:'ON-48',
      taskName: 'Get a to-do list for the week,',
      message: 'Hi, Kate 👋 Good job, keep going. Fell free to text me if you have any questions.',
      avatar:Avatar1,
    },
    {
      id:1,
      task:'ON-46',
      taskName: 'Kick off meeting',
      message: 'Please, see the attached videos about our Slack channel, Jira organisation and Google Drive cloud.',
      avatar:Avatar1,
    }
  ]: [
    {
      id:0,
      task:'ON-48',
      taskName: 'Sign Up Flow',
      message: 'Get a to-do list for the week',
      avatar:Avatar1,
    },
    {
      id:1,
      task:'ON-46',
      taskName: 'Get a to-do list for the week',
      message: 'Hey Alex! Who I shoul ask for a list?',
      avatar:Avatar2,
    }

  ]);

  let onReview = [
    {id:0, task: 'ON-49', taskName: 'Sign Up Flow', avatar: Avatar1},
    {id:1, task: 'ON-45', taskName: 'Get a to-do list for the week', avatar: Avatar2},
    {id:2, task: 'ON-44', taskName: 'Internal policy and company rules', avatar: Avatar2},
    {id:3, task: 'ON-43', taskName: 'Hour with Buddy', avatar: Avatar2},
  ]

  
  return (
    <div className="progress-navigation">
      <span className="progress-navigation__title">{props.buddy ? 'Progress' : 'For Review'}</span>
      {props.buddy ? 
        <Fragment>
        <div className="card-wrap"  style={{animation:`showCard ${Math.random()}s forwards `}}> <ProgresBtn procent={props.procent}>Acquaintance with the project</ProgresBtn></div>
        <div className="card-wrap"  style={{animation:`showCard ${Math.random()}s forwards `}}> <ProgresBtn procent={100}>Equipment and access</ProgresBtn></div>
        <div className="card-wrap"  style={{animation:`showCard ${Math.random()}s forwards `}}> <ProgresBtn procent={100}>Trainings</ProgresBtn></div>
      </Fragment> :
          onReview.map(({id, task, taskName,avatar})=>{
            return (
             <Review key={id} task={task} taskName={taskName} avatar={avatar}/>
            )
          })
      }

     

        <span className="progress-navigation__title">Latest Comments</span>

        {comments.map(({id, task, taskName, message, avatar})=>{
          return (
            <div  key={id} className="card-wrap"  style={{animation:`showCard ${Math.random()}s forwards `}}>
              <Coment
                avatar={avatar}
                task={task}
                taskName={taskName}
                message={message}
              />
            </div>
          );
        })}

    </div>
  );
};

export default ProgresNavigation;

