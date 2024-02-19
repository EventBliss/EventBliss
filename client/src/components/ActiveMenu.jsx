
import { Link } from "react-router-dom";
import "../assets/css/ActiveMenu.css"

function ActiveMenu({bool}){

    const Menu = bool ? "openMenu":"closeMenu"

    return(
        <div className={` ${Menu}`}>
            <Link className="LinkOpen" to="/">Home</Link> 
            <Link className="LinkOpen">Event</Link>
            <Link className="LinkOpen">Products</Link> 
            <Link className="LinkOpen">About us</Link> 
            <Link className="LinkOpen">Contact</Link> 
            <Link className="LinkOpen">Login</Link>
            <Link className="LinkOpen">Sign In</Link>
        </div>
    )
}

export default ActiveMenu;