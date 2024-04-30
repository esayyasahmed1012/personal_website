import React from "react";
import "./Exp.css"
const Exp = () => {
    return ( 
        <div className="container">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>Back-End Development</h2>
            </div>
            <div className="flip-box-back">
              <p>I'm a certified back-end developer with Python, JS, Node.js, Flask, Django, and MongoDB, MySQL, with overall back-end understanding concepts</p>
            </div>
          </div>
        </div>
      
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>Front-End Development</h2>
            </div>
            <div className="flip-box-back">
              <p>As a self-taught Front-end developer, I have a strong understanding of React, HTML, CSS, and Bootstrap</p>
            </div>
          </div>
        </div>
      
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>Mathematics</h2>
            </div>
            <div className="flip-box-back">
              <p>As of now, it may be important, but since I am learning ML, my strong knowledge of mathematics is helping me</p>
            </div>
          </div>
        </div>
      </div>
      
     );
}
 
export default Exp;
