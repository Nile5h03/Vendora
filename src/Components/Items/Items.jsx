import React from "react";
import './Items.css'
import { Link,NavLink } from "react-router-dom";
export default function Items(props){
    return(
        <div className="item">

<Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
<p>{props.name}</p>
<div className="itemprices">
    <div className="itempricenew">${props.new_price}</div>
    <div className="itempriceold">${props.old_price}</div>
</div>

        </div>
    )
}
