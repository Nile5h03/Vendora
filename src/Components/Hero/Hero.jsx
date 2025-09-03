import React from "react";
import './Hero.css'

import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
export default function Hero(){
    return(
        <div className="hero">
            <div className="heroleft">
  <h2>NEW ARRIVALS ONLY</h2>
           <div>
            <div className="handicon">
                <p>new</p>
                <img src={handicon} alt="" />
            </div>
    
            <p>Collection</p>
            <p>for every one</p>
            
            </div>
            <div className="herolatestbtn">
                <div >Latest Collection</div>
                <img src={arrowicon} alt="" />
            </div>
            </div>
            <div className="heroright">
<img src={heroimg} alt="" />
            </div>
        </div>
    )
}