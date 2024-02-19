import { Link, Outlet } from "react-router-dom";
import "../assets/css/Layout.css"
import Footer from "./Footer";
import { useState } from "react";
import ActiveMenu from "../components/ActiveMenu";


function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="content-nav">
        <div className="logo">
            {/* <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" /> */}
        </div>
        <nav>  
          <div className="nav-links">
            <Link to="/" className="links">Home</Link> |
            <Link className="links">Event</Link> |
            <Link className="links">Products</Link> |
            <Link className="links">About us</Link> |
            <Link className="links">Contact</Link> 
          </div>
        </nav>
          <div className="user-links">
            <Link className="user">Login</Link>/
            <Link className="user">Sign In</Link>
          </div>
          <button className="Drop-menu" onClick={toggleMenu} >Menu</button>
      </header>
      <section>
        <ActiveMenu bool={isMenuOpen}/>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  );
}

export default Layout;
