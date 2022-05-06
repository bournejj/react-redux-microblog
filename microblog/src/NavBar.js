import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


function NavBar() {
  return (
    <div>
      
      <Navbar>
        <NavLink exact to="/" >
          Blog
        </NavLink>
        <h1>Microblog</h1>
        <NavLink exact to="/newpost" >
          Add a new post
        </NavLink>

      </Navbar>
    </div>
  );
}

export default NavBar;