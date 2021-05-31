import React from 'react';
import Epick from './Epick/Epick';
import './Tasks.scss';
import Avatar from './../../images/tasks/avatar.png'

const Tasks = () => {
    
    return (
        <div className="tasks">
            <Epick />
        </div>
    );
};

export default Tasks;
