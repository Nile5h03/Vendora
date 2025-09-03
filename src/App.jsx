import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCateogary from './Pages/ShopCateogary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Link,NavLink } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import menbanner from './Components/Assets/banner_mens.png'
import womemnbanner from './Components/Assets/banner_women.png'
import kidsbanner from './Components/Assets/banner_kids.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path = '/' element = {<Shop/>}/>
  <Route path = "/mens" element ={<ShopCateogary banner = {menbanner} cateogary = "men"/>}/>
  <Route path = "/womens" element ={<ShopCateogary banner = {womemnbanner} cateogary = "women"/>}/>
  <Route path = "/Kids" element ={<ShopCateogary banner = {kidsbanner} cateogary = "kid"/>}/>
  <Route path = "/product" element = {<Product/>}>
  <Route path = ":productId" element = {<Product/>}/>
  </Route>
  <Route path = "/cart" element = {<Cart/>}/>
  <Route path = "/login" element = {<LoginSignup/>}/>


</Routes>
<Footer/>
</BrowserRouter>
      
    </div>
    
  )
}

export default App
