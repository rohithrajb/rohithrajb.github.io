import {React, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false)

   return (
      <nav className="flex border-b border-border text-main">
         <Link
            className="px-5 py-2 border-r border-border cursor-pointer hover:text-main"
            to="/">
            _rohithrajb
         </Link>
         <ul className={ menuOpen ? 'open' : ''}>
            <NavLink to="/">_hello</NavLink>
            <NavLink to="/about-me">_about-me</NavLink>
            <NavLink to="/projects">_projects</NavLink>
            <NavLink to="/contact-me">_contact-me</NavLink>
         </ul>
         <div className="burger-menu">
            
         </div>
      </nav>
   );
};

export default Navbar;
