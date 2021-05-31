import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import './Mentor.scss';

import DashbordIcon from '../../components/svg-icons/Dashboard'
import TeamIcon from '../../components/svg-icons/Team'
import DocumentationIcon from '../../components/svg-icons/Documentation'
import CoworkingIcon from '../../components/svg-icons/Coworking'
import CalendarIcon from '../../components/svg-icons/Calendar'
import AwardsIcon from '../../components/svg-icons/Awards'
import RequestIcon from '../../components/svg-icons/Request'
import EsatIcon from '../../components/svg-icons/Esat'
import MenteesIcon from '../../components/svg-icons/Mentees'
import Mentees from '../Mentees/Mentees';
import Onboarding from '../../pages/Onboarding/Onboarding';



const Mentor = (props) => {

  let [boardStatus, setBoardStatus] = useState(false);
  let [activeUser, setActiveUser] = useState(false);

  const navList = [
    { id: 0, linkName: 'Dashboard', url: '/', icon: <DashbordIcon /> },
    { id: 1, linkName: 'Mentees', url: '/mentees', icon: <MenteesIcon /> },
    { id: 2, linkName: 'Team', url: '/team', icon: <TeamIcon /> },
    {
      id: 3,
      linkName: 'Documents',
      url: '/documents',
      icon: <DocumentationIcon />,
    },
    { id: 4, linkName: 'Coworking', url: '/coworking', icon: <CoworkingIcon /> },
    { id: 5, linkName: 'Calendar', url: '/calendar', icon: <CalendarIcon /> },
    { id: 6, linkName: 'Awards', url: '/awards', icon: <AwardsIcon /> },
    { id: 7, linkName: 'Request', url: '/request', icon: <RequestIcon /> },
    { id: 8, linkName: 'ESAT', url: '/esat', icon: <EsatIcon /> },
  ];

  let [hideUser, sethideUser] = useState(100);
  let [hideUserTask, sethideUserTask] = useState(100)
  let [headerName, setHeaderName] = useState('Roadmap')

  function setCareer() {
  }

  function change() {

    if(!boardStatus) {
      setHeaderName('Board');
      setActiveUser(0);
    } else {
      setHeaderName('Roadmap');
      setActiveUser(100);
    }
    setBoardStatus(boardStatus = !boardStatus);
  }

  function hideUsers() {
    sethideUser(0);
    sethideUserTask(0);
  }




    return (
        <div className='mentor'>
          <Navigation buddy={props.buddy} navList={navList} />
          <Route exact path='/'>
           <Dashboard buddy={props.buddy} />
          </Route>
          <Route  path='/mentees'>
           <Onboarding active={activeUser} headerName={headerName} hideUserTask={hideUserTask} hideUsers={hideUsers} hideUser={hideUser} boardStatus={boardStatus} activeUser={activeUser} change={()=>{change()}} buddy={props.buddy} changeNav={()=>{}} setCareer={()=>{setCareer()}} />
          </Route>
        </div>
    );
};

export default Mentor;
