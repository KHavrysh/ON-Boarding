import React from 'react';
import './DashBoard.scss';
import RoadMap from '../../components/Road-map/Road-map';
import Notification from '../../components/Notification/Notification';
import Rocket from '../../images/dashboard/Rocket.svg';
import Rupor from '../../images/dashboard/Rupor.svg';
import Tasks from '../../components/Tasks/Tasks';
import Documentation from '../../components/Documentation/Documentation';
import Tracker from '../../components/Tracker/Tracker';
import Calendar from '../../components/Calendar/Calendar';
import Header from '../../components/Header/Header';
import MenteesCard from '../../components/Mentees-Card/Mentees-Card';

const Dashboard = (props) => {
  return (
    <div className="dash-board">
    <Header title={'Dashboard'} buddy={props.buddy} />
      <main className="dash-board__main">
        <section className="dash-board__img">
          <div className="dash-board__wrap">
            <div className="dash-board__text">
              <span>{props.buddy ? 'Hello Kate!' : 'Hello Alex!'}</span>
              <span>
              {props.buddy ? '  You are almost done with your Onboarding. Do not forget to send tasks for verification on time ☝️.'
              : 'Your menties are almost done onboarding. Remember to check their tasks on time ☝️.'}
              
              </span>
              <span>{props.buddy ? 'My Tasks' : 'Mentee tasks'}</span>
            </div>
            <img className={`dash-board__rocket ${props.buddy ? '' : 'dash-board__rupor'}`} src={props.buddy ? Rocket : Rupor} alt="img"/>
          </div>
          <div className="dash-board__all">
            <span>{props.buddy ? 'Onboarding Roadmap' : 'Your Mentees'}</span>
            <a href="#">See All</a>
          </div>
        </section>
        <Calendar/>
        <div className={`dash-board__tasks-wrap ${props.buddy === false ? 'mentee' : ''}`}>
          {props.buddy ?   <Tasks/> : <MenteesCard />}
          <div className="dash-board__doc">
            <span>Documentation</span>
            <span>See All</span>
          </div>  
          <Documentation/>
        </div>
        <Tracker/>
      </main>
    </div>
  );
};

export default Dashboard;
