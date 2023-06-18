import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpperMenu from './UpperMenu';
import happySmile from "./images/happySmile.svg";
import deadSmile from "./images/deadSmile.svg";
import midSmile from "./images/midSmile.svg";
import './ResultDisplay.css';

const Tolerance = ({ score, badSentences }) => {
  let smileIcon;

  if (score >= 0 && score <= 49) {
    smileIcon = deadSmile;
  } else if (score >= 50 && score <= 70) {
    smileIcon = midSmile;
  } else if (score >= 71 && score <= 100) {
    smileIcon = happySmile;
  } else {
    smileIcon = midSmile; // Default icon if the score is out of range
  }

  return (
    <div className="tolerance-container">
      <p className="tolerance-text">Your Tolerance Score Is</p>
      <p className="result-score">{score !== -1 ? `${score}%` : 'Waiting for the result'}</p>
      <div className="tolerance-icon">
        <img src={smileIcon} alt="Tolerance Icon" />
      </div>
      
      <div className="tolerance-description">
      {"Suggested corrections:"}
        <ul className="bad-sentences-list">
          {badSentences.length > 0 ? (
            badSentences.map((sentence, index) => (
              <li key={index} className="bad-sentence">
                {sentence}
              </li>
            ))
          ) : (
            <li className="waiting-text">Waiting for the percentage</li>
          )}
        </ul>
      </div>
    </div>
  );
};

const ResultDisplay = ({ text, onTryAgain }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [highlightedSentences, setHighlightedSentences] = useState([]);
  const [score, setScore] = useState(-1);
  const [badSentences, setBadSentences] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = JSON.stringify({
        text: text
      });

      axios
        .post('http://localhost:5000/evaluate', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response.data); // Handle the response data here
          const score = response.data[0];
          const sentences = response.data[1];
          const badSentences = response.data[2];
          console.log(badSentences)
          setScore(score);
          setHighlightedSentences(sentences);
          setBadSentences(badSentences);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    fetchData();
  }, []);

  const handleMenuItemHover = e => {
    const target = e.target;
    target.style.borderBottom = '2px solid #1B0909';
  };

  const handleMenuItemLeave = e => {
    const target = e.target;
    target.style.borderBottom = 'none';
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    onTryAgain();
  };

  return (
    <div className="result-page">
      <UpperMenu
        handleMenuItemHover={handleMenuItemHover}
        handleMenuItemLeave={handleMenuItemLeave}
      />

      <div className="result-wrapper">
        <div className="result-container">
          <div className="result-header">
            <span className="result-title">Result</span>
            <hr className="result-line" />
          </div>
          <div className="result-text">
            <p>
              {highlightedSentences.length > 0 ? (
                highlightedSentences.map((sentence, index) => (
                  <span
                    key={index}
                    style={{
                      color:
                        sentence.prediction === 'NON-PRIDE-FRIENDLY' ? 'red' : 'inherit',
                      fontWeight: 'bold',
                    }}
                  >
                    {index > 0 && '. '}
                    {sentence.input}
                  </span>
                ))
              ) : (
                <span className="waiting-text">Waiting for the result</span>
              )}
            </p>
          </div>
        </div>
        <Tolerance score={score} badSentences={badSentences} />
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
