import { MarkdownContext } from "../context/MarkdownContext";

function MarkdownSanitized() {
    return (
        <div className="">
            <MarkdownContext.Consumer>
                {({ getMarkDownAsHTMLOutput }) => (

                    <div dangerouslySetInnerHTML={getMarkDownAsHTMLOutput()} />
                )}
            </MarkdownContext.Consumer>
        </div>
    );
}

export default MarkdownSanitized;