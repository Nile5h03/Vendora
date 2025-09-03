import React, { useContext } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
export default function Product(){
    const {allprd} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allprd.find((e)=>e.id === Number(productId));

    return(
        <div>
            <Breadcrum product = {product}/>
        </div>
    )
}