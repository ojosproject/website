// Header.tsx
// Ojos Project
// 
// This is the header that is displayed everywhere on ojos.calejvaldez.com.
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
    // ! If you're going to update, please check if
    // ! src/components/Header.tsx
    // ! also needs to update

    // * If there is no `Announcement`,
    // * set `children` as <></>
    return (
        <header>
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
