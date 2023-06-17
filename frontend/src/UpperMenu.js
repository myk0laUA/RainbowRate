import React from 'react';
import RalewayRegular from './fonts/Raleway/static/Raleway-Regular.ttf';


const UpperMenu = ({ handleMenuItemHover, handleMenuItemLeave }) => {
  const menuItemStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1B0909',
    textDecoration: 'none',
    margin: '0 90px',
    cursor: 'pointer',
    position: 'relative',
    fontFamily: 'RalewayRegular, sans-serif', // Updated font-family
  };

  const menuContainerStyle = {
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

  const fontFaceStyle = `
    @font-face {
        font-family: 'RalewayRegular';
        src: url(${RalewayRegular}) format('truetype');
    }
  `;

  return (
    <>
      <style>{fontFaceStyle}</style>
      <div style={menuContainerStyle}>
        <a
          href="#"
          style={menuItemStyle}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
        >
          The product
        </a>
        <a
          href="#"
          style={menuItemStyle}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
        >
          About Us
        </a>
        <a
          href="#"
          style={menuItemStyle}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
        >
          Feedback
        </a>
      </div>
    </>
  );
};

export default UpperMenu;
