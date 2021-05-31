import React from 'react';
import './Calendar.scss';

const Calendar = () => {


	function days() {
		let days = []

		for (let i = 1; i < 32; i++) {
			days.push({day:i});
		}

		return days;
	};

    return (
        <div className="calendar">
					<span className="calendar__month">June</span>
					<div className="calendar__deys-wrap">
						<span>Sun</span>
						<span>Mon</span>
						<span>Tue</span>
						<span>Wed</span>
						<span>Thu</span>
						<span>Fri</span>
						<span>Sat</span>
					</div>
					<div className="calendar__date">
						{days().map(({day})=>{
							return (
								<span
									className={day === 15 ? 'calendar__active-day' : ''}
									key={day}>{day}</span>
							);
						})}
					</div>
        </div>
    );
};

export default Calendar;
