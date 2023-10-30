import React from 'react';
import "./Member.css"

function Member(props) {
    // props: name, position, image, URL
    return (
        <div className='member_container'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
            <p>{props.position}</p>
        </div>
    )
}

export default Member;