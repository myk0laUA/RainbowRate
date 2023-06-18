// ResultDisplay.js

import React, { useState } from 'react';
import UpperMenu from './UpperMenu';
import happySmile from "./images/happySmile.svg";
import deadSmile from "./images/deadSmile.svg";
import midSmile from "./images/midSmile.svg";
import './ResultDisplay.css';

const ResultDisplay = ({ onTryAgain }) => { // Add onTryAgain prop
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleMenuItemHover = (e) => {
    const target = e.target;
    target.style.borderBottom = '2px solid #1B0909';
  };

  const handleMenuItemLeave = (e) => {
    const target = e.target;
    target.style.borderBottom = 'none';
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    onTryAgain(); // Call the onTryAgain function from the prop
  };

  return (
    <div className="result-page">
      <UpperMenu handleMenuItemHover={handleMenuItemHover} handleMenuItemLeave={handleMenuItemLeave} />

      <div className="result-wrapper">
        <div className="result-container">
          <div className="result-header">
            <span className="result-title">Result</span>
            <hr className="result-line" />
          </div>
          <div className="result-text">
            <p>
              risus ultricies tristique. Tempus quam pellentesque nec nam aliquam sem et. Cursus risus at ultrices mi tempus imperdiet. In mollis nunc sed id semper risus in hendrerit gravida. Odio euismod lacinia at quis risus sed vulputate. Odio tempor orci dapibus ultrices. Netus et malesuada fames ac turpis. Malesuada pellentesque elit eget gravida. Turpis egestas sed tempus urna et. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Porttitor lacus luctus accumsan tortor posuere. Parturient montes nascetur ridiculus mus. Ut sem nulla pharetra diam. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ornare lectus sit amet est placerat in egestas erat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget.
            </p>
          </div>
        </div>
        <div className="tolerance-container">
          <p className="tolerance-text">Your Tolerance Score Is</p>
          <p className="result-score">100%</p>
          <div className="tolerance-icon">
            {/* Add your SVG icon here */}
            <img src={midSmile} alt="Tolerance Icon" />
          </div>
          <div className="tolerance-description">
            <div className="tolerance-description-text">
              risus ultricies tristique. Tempus quam pellentesque nec nam aliquam sem et. Cursus risus at ultrices mi tempus imperdiet. In mollis nunc sed id semper risus in hendrerit gravida. Odio euismod lacinia at quis risus sed vulputate. Odio tempor orci dapibus ultrices. Netus et malesuada fames ac turpis. Malesuada pellentesque elit eget gravida. Turpis egestas sed tempus urna et. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Porttitor lacus luctus accumsan tortor posuere. Parturient montes nascetur ridiculus mus. Ut sem nulla pharetra diam. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ornare lectus sit amet est placerat in egestas erat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget.
            </div>
          </div>
        </div>
      </div>
      <div className="result-footer">
        <button
          className={`try-again-button ${isButtonClicked ? 'clicked' : ''}`}
          onClick={handleButtonClick}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
