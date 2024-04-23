// root.tsx
// Ojos Project
import GrandmaImage from "/static/images/grandma.jpg"
import JosephGrandmaImage from "/static/images/joseph-grandma.jpg"
import "./index.scss"
import Layout from '@theme/Layout'
import {useColorMode} from '@docusaurus/theme-common';
import members from '@site/static/data/url/members.json'
import Countdown from 'react-countdown';

interface Member {
    name: string
    email: string
    roles: string[]
    institution: string
    website: {label: string, value: string}
    joined: number
    avatar: string
    contributions: string[]
    active: boolean
}


export default function Root() {
    function TeamMember(props: {member?: Member}) {
        const {colorMode} = useColorMode();
        if (!props.member) {
            return (<></>)
        }

        // Instead of using SCSS to configure light mode/dark mode changes,
        // Docusaurus uses the useColorMode hook because, well, React.
        // `index.scss` has a `.darkMemberBackground` and
        // `.lightMemberBackground` to help with giving them the appropriate
        // background to indicate that the member is clickable.
        return (
            <a className={'member_container ' + (colorMode === 'dark' ? "darkMemberBackground": "lightMemberBackground")} target="_blank" rel="noopener noreferrer" href={props.member.website.value}>
                <img src={props.member.avatar+"&s=175"} alt={`Gravatar for ${props.member.name}.`}/>
                <br/>
                <h3>{props.member.name}</h3>
                <p>{props.member.institution.toLowerCase()}</p>
                <p>{props.member.roles[0].toLowerCase()}</p>
            </a>
        )
    }

    function CountdownWrapper() {
        // A countdown for the 2024 Undergraduate Research Symposium.
        // 
        // * Important times:
        // * 1715967000000 - May 17, 10:30 AM: Start of the symposium
        // * 1715989500000 - May 17,  4:45 PM: End of the symposium
        // * 1716015600000 - May 18, 12:00 AM: End of the day
        //
        // Times found in
        // https://urop.uci.edu/symposium/symposium-attendee-2024/
        // 
        // todo: After the Symposium is over and the countdown is no longer
        // todo: needed, run the following command to remove the dependency:
        // todo: `npm uninstall react-countdown`

        if (new Date() > new Date(1716015600000)) {
            // If it's the next day, return nothing.
            return <></>
        }

        const {colorMode} = useColorMode();

        function numberPadding(number: number): string {
            return number > 9 ? `${number}`: "0"+number
        }

        return (
            <div className={"countdown-wrapper " + (colorMode === 'dark' ? "symposium-dark": "symposium-light")}>
                <Countdown date={1715967000000} renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (new Date() > new Date(1715989500000)) {
                        // If the current date is past 4:45 PM, the end time for the symposium
                        return (
                            <>
                                <p>From the bottom of our hearts,</p>
                                <span className="countdown">THANK YOU!</span>
                                <p>The <a href="https://urop.uci.edu/symposium/" target="_blank" rel="noopener noreferrer" >Undergraduate Research Symposium</a> has concluded. ❤️ 🤘</p>
                            </>
                        )
                    }

                    if (completed) {
                        // If it's 10:30 AM, show this
                        return (
                            <>
                                <p>The <a href="https://urop.uci.edu/symposium/" target="_blank" rel="noopener noreferrer" >Undergraduate Research Symposium</a> is happening</p>
                                <span className="countdown">RIGHT NOW!</span>
                                <p>Show your support to the team and UCI research by attending! 🤘🤘🤘</p>
                                <p>Read more about it <a href="/news/symposium-2024/">here</a>.</p>
                            </>
                        )
                    } else {
                        // Show the actual countdown otherwise
                        return (
                            <>
                                <p>The <a href="https://urop.uci.edu/symposium/" target="_blank" rel="noopener noreferrer" >Undergraduate Research Symposium</a> starts in...</p>
                                <span className="countdown">{(days !== 0 ? `${days}:`:null)}{hours !== 0 ? `${numberPadding(hours)}:`:null}{numberPadding(minutes)}:{numberPadding(seconds)}</span>
                                <p>Show your support to the team and UCI research by attending! 🤘🤘🤘</p>
                                <p>Read more about it <a href="/news/symposium-2024/">here</a>.</p>
                            </>
                        )
                    }
                }}/>
            </div>
        )
    }
    
    return (
        <Layout>
            <CountdownWrapper />

            <div className="story">
                <div className="story_text">
                <h1>Creating an easier way to stay connected with who you love.</h1>
                <p>The Ojos Project is a UCI-backed research endeavor in which we aim to understand the needs of hospice patients, caregivers, and healthcare specialists to provide them with a better way to address the hospice experience. By utilizing modern technologies and analyzing previous methods, we will ensure nurses and caregivers stay connected to provide a sense of comfort and confidence during your loved one's care.</p>
                </div>
                <img className="story_image" src={GrandmaImage as string} alt="Carlos with his grandmother"></img>
            </div>

            <div className='story' id="purpose">
                <img className='story_image' src={JosephGrandmaImage as string} alt="Joseph's family"/>
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
                    {members.map((member) => {
                        if (member.active && member.contributions.length) {
                            return <TeamMember member={member}/>
                        }
                    })}
                </div>

                <p>... and <a href="/docs/url/members/">more</a>.</p>
            </div>
        </Layout>
    )
}
