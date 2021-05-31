import React from 'react';
import './Career.scss';
import Header from './../../components/Header/Header';

const Career = () => {
  return (
    <div className="career">
      <Header title={'Career'} />
      <main className="career__main">
        <div><span>Cources and Lectures</span></div>
        <div><span>Events</span></div>
        <div><span>Books</span></div>
        <div><span>Onboarding Archive</span></div>
        <div><span>Articles</span></div>
      </main>
      
    </div>
  );
};

export default Career
