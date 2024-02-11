// root.tsx
// Ojos Project
// 
// This is the root of the website at `/`.
import Layout from '../components/Layout'
import "../styles/Root.css"

function TeamMember(props: {name: string, position: string, website?: string}) {
    if (props.website === null) {
        return (
            <div className='member_container'>
                <h3>{props.name}</h3>
                <p>{props.position}</p>
            </div>
        )
    }
    
    return (
        <div className='member_container'>
            <a href={props.website} target="_blank" rel="noopener noreferrer">{props.name}</a>
            <p>{props.position}</p>
        </div>
    )
}

export default function Root() {
    return (
        <Layout>
            <div className="story">
                <div className="story_text">
                <h1>Creating an easier way to stay connected with who you love.</h1>
                <p>The Ojos Project is a UCI-backed research endeavor in which we aim to understand the needs of hospice patients, caregivers, and healthcare specialists to provide them with a better way to address the hospice experience. By utilizing modern technologies and analyzing previous methods, we will ensure your loved one gets the best possible care during this delicate time.</p>
                </div>
                <img className="story_image" src="/static/images/grandma.jpg" alt="Carlos with his grandmother"></img>
            </div>


            <div className='our_team' id="team">
                <h1>Our Team</h1>
                <div className='team_members'>
                    <TeamMember name="Carlos Valdez" position='software developer' website='https://calejvaldez.com/'/>
                    <TeamMember name="Joseph Sweatt" position='engineering' website='https://blackswan3dprinting.com/'/>
                    <TeamMember name="Ayush Jain" position='software developer' website="https://ayushbot412.github.io/"/>
                    <TeamMember name="Isabella Gronich" position='publishing/documentation'/>
                    <TeamMember name="Jackie Sanchez" position='publishing/documentation'/>
                    <TeamMember name="Mark S. Baldwin, PhD" position='faculty advisor' website='https://markbaldw.in/'/>
                </div>
            </div>
        </Layout>
    )
}