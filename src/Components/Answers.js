import React from 'react';
import Answer from './Answer.js'

function Answers (props) {
    const answers = props.answers && props.answers.map((answer, key) => 
        <Answer key={key}
                answer={answer.answer}
                correct={answer.correct}
                finished={props.finished}
                checked={!!answer.checked}
                onClick={() => props.onClick(key)} />
    );
    return <ul>{answers}</ul>;
}

export default Answers;