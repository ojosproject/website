// Header.tsx
// Ojos Project
// 
// This is the header that is displayed everywhere on ojosproject.org.
import { ReactNode } from 'react'
import Logo from '/static/images/logo.png'

function Announcement({children}: {children: ReactNode}) {
    return (
        <div className="announcement">
            {children}
        </div>
    )
}

function List(props: {selection: {label: string, value: string}[]}) {
    const header_items = props.selection.map(header_item => {
        return (
            <li className='header-item'><a href={header_item.value}>{header_item.label}</a></li>
        )
    })

    return (
        <ul className='header-item-list'>
            {header_items}
        </ul>
    )
}

function Header() {
    let dev_indicator: ReactNode = <></>

    if (window.location.href.includes("dev.")) {
        // This is hosted on a development platform on
        // https://dev.ojosproject.org/
        dev_indicator = <Announcement><p>Currently on the <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/ojosproject/ojos.calejvaldez.com/-/commits/dev">dev branch</a>, meaning that this is for development/testing purposes.</p></Announcement>
    }

    // ! Remove this once Spring Break is over.
    // Temporarily here to notify people we're going on Spring Break.
    const now = new Date();
    let break_indicator: ReactNode = <></>;

    if (new Date(1711152000000) < now && now < new Date(1711983600000)) {
        break_indicator = <Announcement><p>The Ojos Project will be inactive until April 1, 2024. Have a great Spring Break!</p></Announcement>
    }

    // * If there is no `Announcement`,
    // * set `children` as <></>
    return (
        <header>
            {dev_indicator}
            {break_indicator}
            <Announcement>
                <></>
            </Announcement>
            
            <div className='header-item-container'>
                <a href="/"><img src={Logo}></img></a>
                <List selection={[
                    {label: "Project News", value: "/news/"},
                    {label: "Join us!", value: "/news/join-us/"}
                ]}/>
            </div>
        </header>
    )
}

export default Header;
