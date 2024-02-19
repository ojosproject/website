// root.tsx
// Ojos Project
// 
// This is the root of the website at `/`.
import Layout from '../components/Layout'
import GrandmaImage from "/static/images/grandma.jpg"
import "../styles/Root.css"

export default function Root() {
    function TeamMember(props: {name: string, position: string, organization: string, website?: string}) {
        return (
            <div className='member_container'>
                <a href={props.website} target="_blank" rel="noopener noreferrer">{props.name}</a>
                <p>{props.organization}</p>
                <p>{props.position}</p>
                
            </div>
        )
    }
    
    return (
        <Layout>
            <div className="story">
                <div className="story_text">
                <h1>Creating an easier way to stay connected with who you love.</h1>
                <p>The Ojos Project is a UCI-backed research endeavor in which we aim to understand the needs of hospice patients, caregivers, and healthcare specialists to provide them with a better way to address the hospice experience. By utilizing modern technologies and analyzing previous methods, we will ensure your loved one gets the best possible care during this delicate time.</p>
                </div>
                <img className="story_image" src={GrandmaImage} alt="Carlos with his grandmother"></img>
            </div>


            <div className='our_team' id="team">
                <h1>Our Team</h1>
                <div className='team_members'>
                    <TeamMember name="Carlos Valdez" position='project lead' organization="university of california, irvine" website='https://calejvaldez.com/'/>
                    <TeamMember name="Joseph Sweatt" position='engineering' organization="university of california, irvine" website='https://www.linkedin.com/in/josephsweattjr/'/>
                    <TeamMember name="Ayush Jain" position='software developer' organization="university of california, irvine" website="https://ayushbot412.github.io/"/>
                    <TeamMember name="Isabella Gronich" position='researcher' organization="imperial valley college" website="mailto:igronich@students.imperial.edu"/>
                    <TeamMember name="Jackie Sanchez"  position='researcher' organization="imperial valley college" website="mailto:jsanchez88@students.imperial.edu"/>
                    <TeamMember name="Mark S. Baldwin, PhD" position='faculty advisor' organization="university of california, irvine" website='https://markbaldw.in/'/>
                </div>
            </div>
        </Layout>
    )
}
