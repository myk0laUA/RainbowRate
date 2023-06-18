import React, { useState } from 'react';
import girlImage from './images/pd2.png';
import drawing from "./images/writing.svg";
import UpperMenu from './UpperMenu';
import RalewayRegular from './fonts/Raleway/static/Raleway-Regular.ttf';

const MyComponent = ({ onStartClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const styles = `
    @font-face {
      font-family: 'RalewayRegular';
      src: url(${RalewayRegular}) format('truetype');
    }
  `;

  const mainStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "flex-end"
  };

  const upperMenuStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'RalewayRegular, sans-serif',
  };

  const menuItemStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1B0909',
    textDecoration: 'none',
    margin: '0 70px',
    cursor: 'pointer',
    position: 'relative',
  };

  const menuItemHoverStyle = {
    borderBottom: '2px solid #1B0909',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '30px',
    alignSelf: 'center',
    fontFamily: 'RalewayRegular, sans-serif',
  };

  const imageStyle = {
    width: '60%',
    height: 'auto',
    objectFit: 'contain', // Ensure the image retains its proportions
  };

  const rainbowRateStyle = {
    color: '#1B0909',
    fontSize: '60px',
    padding: '50px',
    alignSelf: "flex-start",
    marginLeft: "20px",
    WebkitTextStroke: '1pt black', // Add black stroke
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: isClicked ? '#FFFFFF' : '#FDD5DF',
    color: '#1B0909',
    fontSize: '20px',
    padding: '25px 100px',
    borderRadius: '11px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '-40px',
    fontFamily: 'RalewayRegular, sans-serif', // Updated font-family
  };

  const fillStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    opacity: isClicked ? '1' : '0',
    transition: 'opacity 0.3s ease',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onStartClick(); // Call the provided callback function
    }, 500);
  };

  const handleMenuItemHover = (e) => {
    const target = e.target;
    target.style.borderBottom = '2px solid #1B0909';
  };

  const handleMenuItemLeave = (e) => {
    const target = e.target;
    target.style.borderBottom = 'none';
  };

  return (
    <div style={mainStyle}>
      <style>{styles}</style>
      <UpperMenu
        handleMenuItemHover={handleMenuItemHover}
        handleMenuItemLeave={handleMenuItemLeave}
      />
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <p style={rainbowRateStyle}>RainbowRate</p>
          <button style={buttonStyle} onClick={handleClick}>
            <span style={fillStyle}></span>
            Start
          </button>
          <div style={imageContainerStyle}>
            <img src={drawing} alt="Writing" style={imageStyle} />
          </div>
        </div>
        <img src={girlImage} alt="Girl" style={imageStyle} />
      </div>
    </div>
  );
};

export default MyComponent;
