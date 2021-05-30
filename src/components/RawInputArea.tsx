import React from 'react';
import { MarkdownContext } from '../context/MarkdownContext';

function RawInputArea() {
    return (
        <div className="">
            <MarkdownContext.Consumer>
                {({ rawText, handleChangeRawInputedText }) => (
                    <textarea
                        value={rawText}
                        onChange={e => handleChangeRawInputedText(e.target.value)}
                    >
                    </textarea>
                )}
            </MarkdownContext.Consumer>
        </div>
    );
}

export default RawInputArea;