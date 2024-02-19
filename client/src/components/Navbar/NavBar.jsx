import "./NavBar.css"

export function NavBar () {
    return(
        <header>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h2>EventBliss</h2>
                </div>

                <div className="navbar-sections">
                    <ul className="navbar-sections-links">
                        <li>Home</li>
                        <li>Event</li>
                        <li>Products</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div>
                    <a>login/</a><a>register</a>
                </div>
            </nav>
        </header>
        
    )
}