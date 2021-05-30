import React from 'react';
import './App.css';
import MarkdownSanitized from './components/MarkdownSanitized';
import RawInputArea from './components/RawInputArea';
import { MarkdownContext } from './context/MarkdownContext';
import useMarkdownEditor from './hooks/MarkdownHooks';
function App() {

  const { rawText, getMarkDownAsHTMLOutput, handleChangeRawInputedText } = useMarkdownEditor('');

  return (
    <div className="container">
      <MarkdownContext.Provider value={{rawText, getMarkDownAsHTMLOutput, handleChangeRawInputedText}}>
        <div className="item">
          <RawInputArea />
        </div>
        <div className="item">
          <MarkdownSanitized />
        </div>
      </MarkdownContext.Provider>
    </div>
  );
}

export default App;
