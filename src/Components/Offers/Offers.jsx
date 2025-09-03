import React from "react";

import './Offers.css'
import eximg from '../Assets/exclusive_image.png'

export default function Offers(){
    return(
<div className="offers">
    <div className="offersleft">

        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
    </div>
    <div className="offersright">
        <img src={eximg} alt="" />
    </div>
</div>
    )
}