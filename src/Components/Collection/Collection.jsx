import React from "react";
import './Collection.css'
import newcollect from '../Assets/new_collections'
import Items from "../Items/Items";
export default function  Collection(){
    return(
        <div className="newcollec">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collec">
               {newcollect.map((item,i)=>{
                return <Items  key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
               })}
            </div>
        </div>
    )
}