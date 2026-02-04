// create a footer component that will be used in the app that will have the org name and copyright info and socials such as instaram, facebook, email
import './footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <p>© 2026 Ridgewood Food Co-Op. All rights reserved.</p>
            <div className="socials">
                <a href="https://www.facebook.com/ridgewoodfoodcoop" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/ridgewoodfoodcoop" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="mailto:info@ridgewoodfoodcoop.org" target="_blank" rel="noopener noreferrer">Email</a>    
            </div>
        </footer>
    )
}