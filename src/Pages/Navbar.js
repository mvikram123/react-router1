import React from "react";

import {Link,NavLink} from "react-router-dom"


const Navbar=()=>{



    return(

        <div className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            
        </div>
    )
}

export default Navbar;





            // <a href="/home">Home</a>
            // <a href="/contact">Contact</a>
            // <a href="/blog">Blog</a>
            // <a href="/about">About</a>
