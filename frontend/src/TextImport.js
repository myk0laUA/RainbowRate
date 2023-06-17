import React, { useState } from 'react';
import UpperMenu from './UpperMenu';
import './TextImport.css';

const TextImport = () => {
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
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
    <div className="app-container">
      <UpperMenu handleMenuItemHover={handleMenuItemHover} handleMenuItemLeave={handleMenuItemLeave} />

      <div className="content-container">
        <div className="header">
          <h1 className="header-text">Type your text</h1>
          <hr className="header-line" />
        </div>

        <div className="text-area-container">
          <div className="text-area-wrapper">
            <textarea className="text-area" placeholder="Type here..." value={textValue} onChange={handleTextChange} />
          </div>
          <div className="submit-container">
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImport;
