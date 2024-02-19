import { Link, Outlet } from "react-router-dom";
import "../assets/css/Layout.css"
import Footer from "./Footer";


function Layout() {
  return (
    <div>
      <header className="content-nav">
        <div className="logo">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" />
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
      </header>
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  );
}

export default Layout;
