import "./Member.css"

function Member(props: {name: string, position: string, image?: string, url: string}) {
    // props: name, position, image, URL
    return (
        <div className='member_container'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
            <p>{props.position}</p>
        </div>
    )
}

export default Member;