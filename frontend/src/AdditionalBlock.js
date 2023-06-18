import React from 'react';

const AdditionalBlock = ({ text, backgroundColor, textColor, onClick }) => {
  const additionalBlockStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2',
  };

  const additionalDivStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: '20px',
    display: 'block',
    textAlign: 'center',
    padding: '20px',
    zIndex: '3',
    width: '100%',
    fontFamily: 'RalewayRegular, sans-serif',
  };

  const handleLinkClick = (event) => {
    event.stopPropagation(); // Prevents the onClick event of the parent div from firing
  };

  const renderLink = (word, index) => {
    if (word.startsWith('http') || word.startsWith('www.')) {
      return (
        <a
          key={index}
          href={word.startsWith('http') ? word : `https://${word}`}
          style={{ color: word.startsWith('http') ? 'violet' : 'blue' }}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          {word}
        </a>
      );
    } else if (word.includes('@')) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          style={{ color: 'blue' }}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          {word}
        </a>
      );
    } else {
      return word + ' ';
    }
  };

  return (
    <div style={additionalBlockStyle} onClick={onClick}>
      <div style={additionalDivStyle}>
        {text.split(' ').map((word, index) => renderLink(word, index))}
      </div>
    </div>
  );
};

export default AdditionalBlock;
