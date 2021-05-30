import { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

function getSavedValue(initValue: string) {
    const saveValue = localStorage.getItem('markdown');
    if (saveValue) return saveValue
    return initValue;
}


function useMarkdownEditor(initValue: string) {
    const [rawText, setRawText] = useState(getSavedValue(initValue));

    function handleChangeRawInputedText(text: string) {
        setRawText(text);
    };

    useEffect(() => {
        localStorage.setItem('markdown', rawText)
    }, [rawText])

    function getMarkDownAsHTMLOutput() {
        return { __html: md.render(rawText) };
    };

    return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
}

export default useMarkdownEditor;