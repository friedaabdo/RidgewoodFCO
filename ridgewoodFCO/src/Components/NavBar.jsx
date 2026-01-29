import { Link } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about_us" className="nav-link">About Us</Link>
            <Link to="/order" className="nav-link">Order</Link>
            <Link to="/contact_us" className="nav-link">Contact Us</Link>
        </nav>
    )
}