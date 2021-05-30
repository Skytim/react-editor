import React from 'react';
import './App.css';
import MarkdownSanitized from './components/MarkdownSanitized';
import RawInputArea from './components/RawInputArea';

function App() {
  return (
    <div className="container">
      <div className="item">
        <MarkdownSanitized />
      </div>
      <div className="item">
        <RawInputArea />
      </div>
    </div>
  );
}

export default App;
