import React, { useState } from 'react';
import RalewayRegular from './fonts/Raleway/static/Raleway-Regular.ttf';
import AdditionalBlock from './AdditionalBlock';

const UpperMenu = ({ handleMenuItemHover, handleMenuItemLeave }) => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const menuItemStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1B0909',
    textDecoration: 'none',
    margin: '0 60px',
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
    zIndex: '1',
  };

  const fontFaceStyle = `
    @font-face {
        font-family: 'RalewayRegular';
        src: url(${RalewayRegular}) format('truetype');
    }
  `;

  const handleClick = (block) => {
    setSelectedBlock(block);
  };

  const handleOutsideClick = () => {
    setSelectedBlock(null);
  };

  return (
    <>
      <style>{fontFaceStyle}</style>
      <div style={menuContainerStyle}>
        <a
          href="#"
          style={{
            ...menuItemStyle,
            color: selectedBlock === 'product' ? 'violet' : '#1B0909',
            fontFamily: 'RalewayRegular, sans-serif',
          }}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
          onClick={() => handleClick('product')}
        >
          The product
        </a>
        <a
          href="#"
          style={{
            ...menuItemStyle,
            color: selectedBlock === 'about' ? 'violet' : '#1B0909',
            fontFamily: 'RalewayRegular, sans-serif',
          }}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
          onClick={() => handleClick('about')}
        >
          About Us
        </a>
        <a
          href="#"
          style={{
            ...menuItemStyle,
            color: selectedBlock === 'feedback' ? 'violet' : '#1B0909',
            fontFamily: 'RalewayRegular, sans-serif',
          }}
          onMouseEnter={handleMenuItemHover}
          onMouseLeave={handleMenuItemLeave}
          onClick={() => handleClick('feedback')}
        >
          Feedback
        </a>
      </div>
      {selectedBlock === 'product' && (
        <AdditionalBlock
          text="This is the checker, which helps you analyze how homophobic is your text"
          backgroundColor="#B279D4"
          textColor="#000"
          onClick={handleOutsideClick}
        />
      )}
      {selectedBlock === 'about' && (
        <AdditionalBlock
          text="We are two UTSC students Mykola and Ilya. Feel free to follow us! https://www.linkedin.com/in/ilya-kostin-51b1051aa/ and https://www.linkedin.com/in/mykola-zhuk/"
          backgroundColor="#FFC0CB"
          textColor="#000"
          onClick={handleOutsideClick}
        />
      )}
      {selectedBlock === 'feedback' && (
        <AdditionalBlock
          text="Send your feedback on this mail! rainbowratefeedback@gmail.com"
          backgroundColor="#87CEFA"
          textColor="#000"
          onClick={handleOutsideClick}
        />
      )}
    </>
  );
};

export default UpperMenu;
