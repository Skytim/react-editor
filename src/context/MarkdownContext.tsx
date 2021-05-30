import React from 'react';
export const MarkdownContext = React.createContext({
    rawText: '',
    getMarkDownAsHTMLOutput: (): { __html: string; } => {
        return { __html: '' };
    },
    handleChangeRawInputedText: (input: string) => { },
});