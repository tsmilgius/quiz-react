import React from 'react';
function Info (props) {
    if (!props.finished) {
        return null;
    }
    return (
        <div>
            <hr />
            <p>{props.info}</p>
        </div>
    );
}

export default Info;