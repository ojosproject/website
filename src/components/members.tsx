// members.tsx
// Ojos Project
// 
// Gets and organizes the information about members of the Ojos Project to
// display it in https://docs.ojosproject.org/url/members/.
import membersJSON from "@site/static/data/url/members.json";

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

function getRowForCurrentMember(member: Member) {
    const joined = new Date(member.joined*1000);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    return (<tr>
        <td><img src={member.avatar+"&s=150"} alt={`${member.name}'s Gravatar`}/></td>
        <td>{member.name}</td>
        <td>{`${months[joined.getMonth()]} ${joined.getDate()}, ${joined.getFullYear()}`}</td>
        <td><a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">{member.email}</a></td>
        <td><a href={member.website.value} target="_blank" rel="noopener noreferrer">{member.website.label}</a></td>
    </tr>)
}

function getRowForFormerMember(member: Member) {
    return (
        <tr>
            <td><img src={member.avatar+"&s=150"} alt={`${member.name}'s Gravatar`}/></td>
            <td>{member.name}</td>
            <td><a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">{member.email}</a></td>
            <td><a href={member.website.value} target="_blank" rel="noopener noreferrer">{member.website.label}</a></td>
            <td>
                <ul>
                    {member.contributions.map(contribution => {
                        return <li>{contribution}</li>
                    })}
                </ul>
            </td>
        </tr>
    )
}

export const CurrentMembers = () => (
    <table>
        <thead>
            <tr>
                <td>Photo</td>
                <td>Name</td>
                <td>Joined</td>
                <td>Email</td>
                <td>Website</td>
            </tr>
        </thead>
        <tbody>
            {membersJSON.map((member: Member) => {
                if (member.active) {
                    return getRowForCurrentMember(member);
                }
            })}
        </tbody>
    </table>
)

export const FormerMembers = () => (
    <table>
        <thead>
            <td>Photo</td>
            <td>Name</td>
            <td>Email</td>
            <td>Website</td>
            <td>Contributions</td>
        </thead>
        <tbody>
            {membersJSON.map((member: Member) => {
                if (!member.active && member.contributions.length) {
                    return getRowForFormerMember(member);
                }
            })}
        </tbody>
    </table>
)
