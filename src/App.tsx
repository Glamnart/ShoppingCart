import Header from './components/Header.tsx'
import Products from './components/Products.tsx'
import Cart from './components/Cart.tsx'
import type { cartFields } from './utils/types.ts'
import { useState } from 'react'
import './App.css'


const App:React.FC = () =>{
  const rawCart : string = sessionStorage.getItem("cartItems") || "[]";
  let cartItem: cartFields[];
    try {
        cartItem = JSON.parse(rawCart) as cartFields[];
    } catch (error) {
        console.error("Failed to parse cart from sessionStorage:", error);
        cartItem = [];
    }
  const [cartState, setCartState] = useState<cartFields[]>(cartItem)
  return(<div className='flex flex-col h-screen'>
    <div className="bg-[url('src/assets/headerBackground.webp')] bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay lg:pb-8 h-fit flex-1">
      <Header/>
      <Products  cart={cartState} setcart={setCartState}/>
    </div>
    <Cart cart ={cartState} setcart={setCartState}/>
  </div>)
}

export default App
