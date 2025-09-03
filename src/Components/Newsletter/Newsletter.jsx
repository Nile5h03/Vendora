import React from "react";

import './Newsletter.css'

export default function Newsletter(){
    return(
        <div className="nesletter">
<h1>Get Exclusive Offer On Your Email</h1>
<p>Subscribe to our newsletter and stay updated</p>
<div>
    <input type="email" placeholder="Your email id" />
    <button>Subscribe</button>

</div>
        </div>
    )
}