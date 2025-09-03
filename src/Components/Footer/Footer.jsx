import React from "react";

import './Footer.css'
import footerlogo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'
import what from '../Assets/whatsapp_icon.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footerlogo">
                <img src={footerlogo} alt="" />
                <p>SHOPPER</p>
            </div>
<ul className="footerlinks">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footericon">
    <div className="iconcontainer">
        <img src={insta} alt="" />
        
    </div>
    <div className="iconcontainer">
        <img src={pint} alt="" />
        
    </div>
    <div className="iconcontainer">
        <img src={what} alt="" />
        
    </div>
</div>
<div className="copyright">
    <hr />
    <p>Copyright @ 2023 - All Right Reserved</p>
</div>
        </div>
    )
}
