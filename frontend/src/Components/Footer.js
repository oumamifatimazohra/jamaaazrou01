import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <a href="/"><img src="https://i.ibb.co/sRqr8r9/logo.png" /></a>
            
          </div>
          {/* Column2 */}
          <div className="col">
            <a href="/"><h4>DGCT</h4></a>
            <ui className="list-unstyled">
             <a href="/faq"><li>FAQ</li></a> 
              <a href="/contact"><li>Contactez-nous</li></a>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
           <a href="/"><h4>LIENS UTILES</h4></a> 
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm p">
            &copy;{new Date().getFullYear()}  DGCT 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
