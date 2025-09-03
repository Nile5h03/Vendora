import React, { createContext } from "react";
import allprd from '../../Components/Assets/all_product'
export const ShopContext = createContext(null);
 const ShopContextProvider = (props)=>{
    const contextval = {allprd};
    return(
        <ShopContext.Provider value={contextval}>
{props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;