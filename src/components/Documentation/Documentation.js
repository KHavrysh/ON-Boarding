import React from 'react';
import './Documentation.scss';
import Pdf from '../../images/pdf.svg'

const Documentation = () => {
    return (
        <div className="doc">
            <button> <img src={Pdf} alt="img" />User Manual</button>
            <button> <img src={Pdf} alt="img" />Onboarding 2.9</button>
            <button> <img src={Pdf} alt="img" />Awards</button>
            <button> <img src={Pdf} alt="img" />Test</button>
            <button> <img src={Pdf} alt="img" />Documents</button>
        </div>
    );
};

export default Documentation;
