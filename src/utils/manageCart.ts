import type { ProductProp,cartFields } from "./types";

export function AddUnits({name,cart,setcart}:ProductProp):void{
    const currentCart: cartFields[] = cart;
    const newCart = currentCart.map(item => {
        if(item.name == name ) 
            return { ...item, units: item.units + 1 }; 
        return item
    }); 
    setcart(newCart);
    sessionStorage.setItem("cartItems",JSON.stringify(newCart));
}

export function ReduceUnits({name,cart,setcart}:ProductProp):void{
    const currentCart: cartFields[] = cart;
    const newCart = currentCart.map(item => {
        if(item.name == name && item.units > 1) 
            return { ...item, units: item.units - 1 }; 
        return item
    }); 
    setcart(newCart);
    sessionStorage.setItem("cartItems",JSON.stringify(newCart));
}

export function deleteItem ({name,cart,setcart}:ProductProp):void{
    const currentCart: cartFields[] = cart;
    const newCart = currentCart.filter(item => item.name != name); 
    setcart(newCart);
    sessionStorage.setItem("cartItems",JSON.stringify(newCart));
}
