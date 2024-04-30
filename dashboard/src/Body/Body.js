import React from "react";
import mypic from "./mypic.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Body.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faXTwitter, faTelegram} from '@fortawesome/free-brands-svg-icons';



const Body = () => {
    return ( 
        <div className="body">
            <div className="discribe_me">
                <h3>I am Esayyas Ahmed  Software Engineer</h3>
                <cite>Say smoething that can't be done, I love that !</cite>
                <a href="https://github.com/esayyasahmed1012/HocusPocus-App" className="btn btn-primary" 
                target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
                <div className="social-links">
                     <ul>
                        <li><a href="#"><FontAwesomeIcon className= "icons" icon={faGithub} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className= "icons" icon={faXTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className= "icons" icon={faTelegram} /></a></li>
                     </ul>
                </div>
            </div>
            <img src={mypic} alt="myprofile" />
        </div>
     );
}
 
export default Body
