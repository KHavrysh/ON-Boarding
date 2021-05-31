import React, { useState } from 'react';
import ProgresBar from '../../components/Progress-bar/Progress-bar';
import Search from '../../components/Search/Search';
import './Onboarding.scss';
import ProgressNavigation from './../../components/Progress-navigation/Progress-navigation'
import RoadMap from './../../components/Road-map/Road-map';
import TaskBoard from '../../components/Task-board/Task-board';
import Header from '../../components/Header/Header';

const Onboarding = (props) => {

  let [progresBar, setProgresBar] = useState(true);
  let [procent, setProcent] = useState(98);

  

  function changeProgresBar(name) {
    if (name === 'Done') {
      setProgresBar(false);
      setProcent(100);
    }
  } 
 
  function changeProgres(params) {
    setProgresBar(false)
    setProcent(100);
  }

  return (
    <div className="on-board">
      <main className={`on-board__main ${ props.boardStatus ? 'on-board__board' : ''}`}>
        <Header title={props.headerName}/>
        <ProgresBar
         activeUser={props.activeUser}
         change={()=>{props.change()}}
         boardStatus={props.boardStatus}
         buddy={props.buddy}
         review={progresBar}
         hideUser={props.hideUser}
         active={props.active}
        />
        { props.boardStatus ? <TaskBoard changeProgres={()=>{changeProgres()}} hideUsers={()=>{props.hideUsers()}} hideUser={props.hideUser} change={()=>{props.change()}}  buddy={props.buddy} changeProgresBar={(name)=>{changeProgresBar(name)}} setCareer={()=>{props.setCareer()}} />  :  <RoadMap hideUserTask={props.hideUserTask} selectuser={()=>{props.change()}} buddy={props.buddy}/> }
      </main>
      <ProgressNavigation buddy={props.buddy} procent={procent} />
    </div>
  );
};

export default Onboarding;
