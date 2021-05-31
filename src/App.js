import './App.scss';
import React, { useState } from 'react';
import {Switch, BrowserRouter as Router } from "react-router-dom";
import Student from './pages/Student/Student';
import Mentor from './pages/Mentor/Mentor';
import { Link } from 'react-router-dom';


function App() {

  let [student, setStuden] = useState(true);
  let [hideLogin, sethideLogin] = useState(false);

  function choseUser(user) {
    sethideLogin(true)

    if (user === 'Buddy') {
      setStuden(false)
    }
  }
  
  return (
    <div className="app">

      <Router>
        <div className={`app__login ${ hideLogin ? 'hideLogin' : ''}`}>
          <span className="app__title">Onboarding</span>
          <div className="app__btn-wrap">
            <Link to={'/'} onClick={()=>{choseUser('Mentee')}} className="app__btn">Mentee</Link>
            <Link to={'/'} onClick={()=>{choseUser('Buddy')}} className="app__btn">Buddy</Link>
          </div>
        </div>
        <Switch>
         {student ? <Student buddy={student} /> : <Mentor buddy={student} />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
