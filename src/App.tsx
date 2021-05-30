import './App.css';
import MarkdownSanitized from './components/MarkdownSanitized';
import RawInputArea from './components/RawInputArea';
import { MarkdownContext } from './context/MarkdownContext';
import useMarkdownEditor from './hooks/MarkdownHooks';
function App() {

  const { rawText, getMarkDownAsHTMLOutput, handleChangeRawInputedText } = useMarkdownEditor('# Hello World');

  return (
    <>
      <MarkdownContext.Provider value={{ rawText, getMarkDownAsHTMLOutput, handleChangeRawInputedText }}>
        <RawInputArea />
        <MarkdownSanitized />
      </MarkdownContext.Provider>
    </>
  );
}

export default App;
