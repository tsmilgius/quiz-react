import React from 'react';
import RepeatQuiz from './Buttons/RepeatQuiz';

function Score (props) {
    if (props.score === '') {
        return null;
    }
    const percents = Math.floor((props.score / props.total) * 100);
    const result = percents >= 80 ? true : false;
    return (
        <div>
            <hr />
            <p>Atsakėte į <b>{percents}%</b> klausimų.</p>
            <p>Teisingai atsakyta: <b>{props.score}</b> iš <b>{props.total}</b></p>
            <RepeatQuiz onClick={() => props.onClick()} />
        </div>
    );
}

export default Score;