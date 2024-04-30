import React from "react";
import "./Header.css"
const Header = () => {
    return ( 
        <div className="Header">
            <button className="">Esayyas Ahmed</button>
			<ul>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Qoute</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
     );
}
 
export default Header;