import { MarkdownContext } from '../context/MarkdownContext';

function RawInputArea() {
    return (
        <>
            <MarkdownContext.Consumer>
                {({ rawText, handleChangeRawInputedText }) => (
                    <textarea
                        placeholder="Enter Markdown"
                        value={rawText}
                        onChange={e => handleChangeRawInputedText(e.target.value)}
                    >
                    </textarea>
                )}
            </MarkdownContext.Consumer>
        </>
    );
}

export default RawInputArea;