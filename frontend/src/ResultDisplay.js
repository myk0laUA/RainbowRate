import React from 'react';
import './ResultDisplay.css';
import RalewayRegular from './fonts/Raleway/static/Raleway-Regular.ttf';

const ResultDisplay = () => {
  return (
    <div className="result-page">
      <h1 className="result-header">Result</h1>
      <div className="result-container">
        <div className="result-text">
          <p className="tolerance-text">Your Tolerance Score Is</p>
          <p className="result-score">100%</p>
        </div>
        <div className="result-footer">
          <button className="try-again-button">Try again</button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
