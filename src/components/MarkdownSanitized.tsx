import { MarkdownContext } from "../context/MarkdownContext";
import React from 'react';
function MarkdownSanitized() {
    return (
        <>
            <MarkdownContext.Consumer>
                {({ getMarkDownAsHTMLOutput }) => (
                    <div
                        dangerouslySetInnerHTML={getMarkDownAsHTMLOutput()}
                    />
                )}
            </MarkdownContext.Consumer>
        </>
    );
}

export default MarkdownSanitized;