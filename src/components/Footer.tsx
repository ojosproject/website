// Footer.tsx
// Ojos Project
// 
// This is the footer displayed everywhere on ojos.calejvaldez.com.

function Footer() {
    // Temporary footer
    // Once I want to add more information, I'll add an appropriate footer.
    return (
        <footer>
            <div className="list-collection">
                <img src="/static/images/logo.png"/>
                <ul>
                    <li>Ojos Project</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/10M-nWgvVwltjMFBX2B4WWvXJXEF5i2PFWH1fpbsGK-8/">Timeline</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/">Finances</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://markbaldw.in/url/">Undergraduate Research Lab</a></li>
                </ul>

                <ul>
                    <li>Dev Team</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/ojosproject/">GitLab</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/news/how-to-write-commit-messages-maintainers-will-like/">Writing a commit</a></li>
                </ul>

                <ul>
                    <li>Research Team</li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/">Google Scholar</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://imperial.edu/courses-and-programs/divisions/arts-and-letters/library-2/index.html">IVC Library</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.lib.uci.edu/">UCI Library</a></li>
                </ul>
            </div>

            <p className="footer_message">ojos means eyes, named after my grandma's nickname for me: <a href="https://translate.google.com/?sl=es&tl=en&text=mis+ojos" target="_blank" rel="noopener noreferrer">mis ojos</a></p>
        </footer>
    )
}

export default Footer;
