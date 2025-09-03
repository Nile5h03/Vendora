import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cartlogo from '../Assets/cart_icon.png'
import { Link,NavLink } from "react-router-dom";
export default function Navbar(){
      const[menu,setMenu] = useState("shop");
      return(
    <div className="Navbar">
<div className="navlogo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className="navmenu">
    <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to = '/'> SHOP</Link> {menu === "shop"? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to = '/mens'>MEN</Link> {menu === "mens" ? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to = '/womens'>WOMEN</Link> {menu === "womens" ? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'none'}} to='/Kids'>KIDS</Link> {menu === "Kids"?<hr/>:<></>}</li>
</ul>
<div className="logocart">
    <Link to = '/login'><button>Login</button></Link>
    <Link to = '/cart'><img src={cartlogo} alt="" /></Link>
    <div className="navcartcounter">
        0
    </div>
</div>
    </div>
)
}