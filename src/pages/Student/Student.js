import React, { useState } from "react";
import { Route } from "react-router-dom";
import './Student.scss';
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import Onboarding from "../Onboarding/Onboarding";
import Career from "../Career/Career";


import DashbordIcon from '../../components/svg-icons/Dashboard'
import OnboardingIcon from '../../components/svg-icons/Onboarding'
import TeamIcon from '../../components/svg-icons/Team'
import DocumentationIcon from '../../components/svg-icons/Documentation'
import CoworkingIcon from '../../components/svg-icons/Coworking'
import CalendarIcon from '../../components/svg-icons/Calendar'
import AwardsIcon from '../../components/svg-icons/Awards'
import RequestIcon from '../../components/svg-icons/Request'
import EsatIcon from '../../components/svg-icons/Esat'
import CareerIcon from '../../components/svg-icons/Career'



const Student = (props) => {

  let [finish, setFinish] = useState(false);
  let [boardStatus, setBoardStatus] = useState(false);
  let [activeUser, setActiveUser] = useState(false);
  let [headerName, setHeaderName] = useState('Roadmap')



  

  const navList = [
    { id: 0, linkName: 'Dashboard', url: '/', icon: <DashbordIcon /> },
    { id: 1, linkName:  finish ? 'Career' : 'Onboarding', url: finish ? '/career' : '/onboarding', icon: finish ? <CareerIcon /> : <OnboardingIcon /> },
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

  function setCareer() {
      if (props.buddy) {
        setFinish(true);
      }
  }

  function change() {
    if(!boardStatus) {
      setHeaderName('Board');
    } else {
      setHeaderName('Roadmap');
    }
    
    setBoardStatus(boardStatus = !boardStatus);
    setActiveUser(0);
  }

  function hideUsers() {
    
  }

  return (
    <div className='student'>
      <Navigation buddy={props.buddy} navList={navList} finish={finish} />
      <Route exact path='/'>
        <Dashboard buddy={props.buddy}/>
      </Route>
      <Route path='/onboarding'>
        <Onboarding headerName={headerName} hideUsers={hideUsers} boardStatus={boardStatus} activeUser={activeUser} change={()=>{change()}} buddy={props.buddy} setCareer={()=>{setCareer()}}/>
      </Route>
      <Route path='/career'>
        <Career />
      </Route>
    </div>
  );
};

export default Student;
