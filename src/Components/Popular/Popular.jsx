import React from "react";
import './Popular.css'
import data from '../Assets/data'
import Items from "../Items/Items";
export default function Popular(){
    return(
        <div className="popular">
<h1>Popular in WOMEN</h1>
<hr />
<div className="popularitem">
    {data.map((item,i)=>{
        return <Items key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
    })}
</div>
        </div>
    )
}