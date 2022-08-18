import React from "react";
import {NavLink} from "react-router-dom"
function ActiveLinks(){
    return (
        <nav className="testNavs">
            <NavLink exact="true" to="/home" >Home</NavLink>  
            <NavLink exact="true" to="/about" >About</NavLink>  
            <NavLink exact="true" to="/me" >Me</NavLink>
        </nav>
    )
}

export default ActiveLinks