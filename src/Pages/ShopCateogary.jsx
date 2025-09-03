import React, { useContext } from "react";
import './CSS/ShopCateogary.css'
import { ShopContext } from "../Components/Context/ShopContext";
import dropicn from '../Components/Assets/dropdown_icon.png'
import Items from "../Components/Items/Items";

export default function ShopCateogary(props){
    const {allprd} = useContext(ShopContext);
    return(
     
        <div className="shpcateogary">
<img src={props.banner} className="banner" alt="" />
<div className="indexsort">
    <p><span>Showing 1-12</span> out of 36 products</p>
    <div className="sort">
        sort by <img src={dropicn} alt="" />
    </div>
</div>
            <div className="products">
{allprd.map((item)=>{
    if(item.category === props.cateogary){
        return<Items  id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
    }else{
        return null   }
})}
            </div>
            <div className="shopcategoryloadmode">
EXPLORE MORE
            </div>
        </div>
    )
}