// qr.tsx
// Ojos Project
// 
// This is where people go to when they visit the /qr/ path. This page will
// redirect people to the page we meant to send them so that we don't have
// any broken QR codes out there.
import { Redirect } from "@docusaurus/router"

export default function qr() {
    return (
        <Redirect to='/news/join-us/' />
    )
}
