import React from 'react';
function FinishQuiz (props) {
    if (props.finished) {
        return null;
    }
    return <button type="button" className="btn btn-danger" onClick={props.onClick}>Baigti</button>;
}

export default FinishQuiz;