import React, { useState } from 'react';
import UpperMenu from './UpperMenu';
import './Info.css';
import pointing from "./images/pointing2.svg";
import textIcon from "./images/text.svg";
import glass from "./images/glass.svg";

const handleMenuItemHover = (e) => {
  const target = e.target;
  target.style.borderBottom = '2px solid #1B0909';
};

const handleMenuItemLeave = (e) => {
  const target = e.target;
  target.style.borderBottom = 'none';
};

const Box = ({ icon, text }) => (
  <div className="box">
    <div className="icon">
      <img src={icon} alt="Icon" />
    </div>
    <div className="text">
      {text}
    </div>
  </div>
);

const Info = ({ onImportText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onImportText(); // Call the onImportText function provided by the parent component
  };

  return (
    <div>
      <UpperMenu handleMenuItemHover={handleMenuItemHover} handleMenuItemLeave={handleMenuItemLeave} />
      <div className="container">
        <div className="box-container">
          <Box icon={textIcon} text={"Provide your\n text\n"} />
          <Box icon={pointing} text={"Click the\n button\n"} />
          <Box icon={glass} text={"Check\n the output\n"} />
        </div>
        <button className={`button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
          <span className={`fill ${isClicked ? 'filled' : ''}`}></span>
          Start
        </button>
      </div>
    </div>
  );
};

export default Info;
