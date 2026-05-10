import { faCaretDown,faCaretUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import type {CartHeadProp,CartProp} from "../utils/types.ts"
import { AddUnits,ReduceUnits,deleteItem } from "../utils/manageCart.ts"

const CartHead = ({clicked,setClicked,cart}:CartHeadProp)=>{
    return <div className="flex flex-row items-center justify-between px-5 border-2 border-gray-400 py-1">
        <p className="text-3xl">Shopping Cart</p>
        <div className="text-2xl flex flex-row items-center">Item(s): <div className="rounded-full ml-1.5 px-4 py-1.5 bg-gray-200">{cart.length}</div></div>
        <div className="text-2xl flex flex-row items-center">Total: <div className="bg-gray-200 ml-1.5 px-7">{cart.reduce((cartTotal,{units,price})=> cartTotal + (units*price),0)}</div></div>
        <FontAwesomeIcon onClick={() => setClicked(!clicked)} icon={clicked ? faCaretUp : faCaretDown} className="text-2xl hover:text-gray-400"/>
    </div>
}

const CartDropdown = ({clicked,cart,setcart}:CartProp) => {
    return( cart.map(({name,units,price},i) => <div key={i} className = "flex-row items-center justify-between px-5 border-2 border-gray-400 py-1" style={clicked? {display: "flex"}:{display: "none"}}>
        <p className="text-3xl">{name}</p> 
        <div className="text-2xl flex flex-row items-center">
            Unit(s): 
            <div className="rounded-full ml-1.5 px-4 py-1.5 bg-gray-200">{units}</div>
            <div className="flex flex-col">
                <FontAwesomeIcon icon={faCaretUp} className="text-2xl hover:text-gray-400" onClick={()=>{AddUnits({name,price,cart,setcart})}}/>
                <FontAwesomeIcon icon={faCaretDown} className="text-2xl hover:text-gray-400" onClick={()=>{ReduceUnits({name,price,cart,setcart})}}/>
            </div>
        </div>
        <div className="text-2xl flex flex-row items-center">Unit Price: <div className="bg-gray-200 ml-1.5 px-7">{price}</div></div>
        <div className="text-2xl flex flex-row items-center">Sub-Total: <div className="bg-gray-200 ml-1.5 px-7">{units*price}</div></div>
        <button className="border bg-gray-200 border-gray-100 px-3 h-10 text-nowrap text-lg rounded-md hover:bg-red-600 hover:border-0 hover:text-white" onClick={()=>{deleteItem({name,price,cart,setcart})}}>Remove Item</button>
    </div>)
    )
}


const Cart : React.FC<CartProp> = ({cart,setcart})=>{
        const [DropDown, setDropDown] = useState(false)
    return <>
        <CartHead clicked = {DropDown} setClicked = {setDropDown} cart={cart}/>
        <CartDropdown cart={cart} clicked={DropDown} setcart={setcart}/>
    </>
}

export default Cart;