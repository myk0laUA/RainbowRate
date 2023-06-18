// App.js

import React, { useState } from 'react';
import MyComponent from './MyComponent';
import Info from './Info';
import TextImport from './TextImport';
import ResultDisplay from './ResultDisplay';

function init(inputString) {
  const result = {
    start: false,
    info: false,
    importText: false,
    seeResult: false,
    aboutUs: false,
    aboutProduct: false,
    feedback: false,
  };

  if (result.hasOwnProperty(inputString)) {
    result[inputString] = true;
  }

  return result;
}

function App() {
  const [obj, setObj] = useState(init('start'));
  const [inputText, setInputText] = useState('');

  const handleStartClick = () => {
    setObj(init('info'));
  };

  const handleImportText = () => {
    setObj(init('importText'));
  };

  const handleTextSubmit = () => {
    setObj(init('seeResult'));
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTryAgain = () => {
    setObj(init('start'));
    setInputText('');
  };

  let element;
  if (obj.seeResult) {
    element = <ResultDisplay text={inputText} onTryAgain={handleTryAgain} />;
  } else if (obj.importText) {
    element = <TextImport onSubmit={handleTextSubmit} onTextChange={handleTextChange} />;
  } else if (obj.info) {
    element = <Info onImportText={handleImportText} />;
  } else {
    element = <MyComponent onStartClick={handleStartClick} />;
  }

  return <div className="App">{element}</div>;
}

export default App;
