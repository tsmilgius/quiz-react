import React from 'react';


function Answer(props) {
    return (


        <li className={props.finished ? props.correct ? 'green' : 'red' : ''}>
            <div className="row">
                <div className="col" >
                    <input type="checkbox" onClick={props.onClick} checked={props.checked} disabled={props.finished} />
                    {props.answer}
                </div>
            </div>
        </li>
    );
}

export default Answer;