// root.tsx
// Ojos Project
// 
// This is the root of the website at `/`.
import Layout from '../components/Layout'
import GrandmaImage from "/static/images/grandma.jpg"
import "../styles/Root.css"

export default function Root() {
    function TeamMember(props: {name: string, position: string, organization: string, gravatar_link: string, website?: string}) {
        return (
            <a className='member_container' target="_blank" rel="noopener noreferrer" href={props.website}>
                <img src={props.gravatar_link+"?s=175&d=mp"} alt={`Gravatar for ${props.name}.`}/>
                <br/>
                <h3>{props.name}</h3>
                <p>{props.organization}</p>
                <p>{props.position}</p>
            </a>
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
                    <TeamMember name="Carlos Valdez" position='project lead' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/41bb2938e02bf5326eb6b82ec02d919ca97cf68b376c4c5769fbba4acc85a190' website='https://calejvaldez.com/'/>
                    <TeamMember name="Joseph Sweatt" position='engineering' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/fac497a877e467035b306a201b938608120228662480b08e0477c59b4cfe347a' website='https://www.linkedin.com/in/josephsweattjr/'/>
                    <TeamMember name="Ayush Jain" position='software developer' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/e4c598f9826093429edec4c38d6bfb93968a59b512259b07e7d1ffe4ff7bb115' website="https://ayushdotjain.com/"/>
                    <TeamMember name="Isabella Gronich" position='researcher' organization="imperial valley college" gravatar_link='https://gravatar.com/avatar/e4b66681a801324cb8b596783892b45e275d0c182789cb22a2af0c14ff73f0f8' website="mailto:igronich@students.imperial.edu"/>
                    <TeamMember name="Mark S. Baldwin, PhD" position='faculty advisor' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/84ea4715fcf218179a00bd36150884d878b5d4a19fb731b2d09ab0eee7aba509' website='https://markbaldw.in/'/>
                </div>
            </div>
        </Layout>
    )
}
