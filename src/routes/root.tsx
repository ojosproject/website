// root.tsx
// Ojos Project
// 
// This is the root of the website at `/`.
import Layout from '../components/Layout'
import GrandmaImage from "/static/images/grandma.jpg"
import JosephGrandmaImage from "/static/images/joseph-grandma.jpg"
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
                <p>The Ojos Project is a UCI-backed research endeavor in which we aim to understand the needs of hospice patients, caregivers, and healthcare specialists to provide them with a better way to address the hospice experience. By utilizing modern technologies and analyzing previous methods, we will ensure nurses and caregivers stay connected to provide a sense of comfort and confidence during your loved one's care.</p>
                </div>
                <img className="story_image" src={GrandmaImage} alt="Carlos with his grandmother"></img>
            </div>

            <div className='story' id="purpose">
                <img className='story_image' src={JosephGrandmaImage} alt="Joseph's family"/>
                <div className='story_text'>
                    <h1>Our Purpose</h1>
                    <p>Hospice patients are often immobile and slowly lose their independence, relying on the people around them to take care of them. It's difficult to help someone in this position when we often have other responsibilities, such as work.</p>
                    <p>During this moment, caregivers often have a lot on their mind. This can become dangerous if the caregiver forgets critical information about the patient's care, loses track of how often medication was taken, or forgets to report the patient's level of comfort.</p>
                    <p>The purpose of the Ojos Project is to increase patient independence by providing a kiosk-like assistant and to make sure all caregivers are on the same page by ensuring all information of the patient's care is on one device.</p>
                </div>
            </div>


            <div className='our_team' id="team">
                <h1>Our Team</h1>
                <div className='team_members'>
                    <TeamMember name="Carlos Valdez" position='url team' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/41bb2938e02bf5326eb6b82ec02d919ca97cf68b376c4c5769fbba4acc85a190' website='https://calejvaldez.com/'/>
                    <TeamMember name="Joseph Sweatt" position='url team' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/fac497a877e467035b306a201b938608120228662480b08e0477c59b4cfe347a' website='https://www.linkedin.com/in/josephsweattjr/'/>
                    <TeamMember name="Ayush Jain" position='url team' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/e4c598f9826093429edec4c38d6bfb93968a59b512259b07e7d1ffe4ff7bb115' website="https://ayushdotjain.com/"/>
                    <TeamMember name="Mark S. Baldwin, PhD" position='faculty advisor' organization="university of california, irvine" gravatar_link='https://gravatar.com/avatar/84ea4715fcf218179a00bd36150884d878b5d4a19fb731b2d09ab0eee7aba509' website='https://markbaldw.in/'/>
                </div>

                <p>... and <a href="https://docs.ojosproject.org/url/members/">more</a>.</p>
            </div>
        </Layout>
    )
}
