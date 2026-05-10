export interface ProductType{
    name: string,
    price: number,
    img?: string,
}

export interface CartProp{
    cart : cartFields[],
    setcart: React.Dispatch<React.SetStateAction<cartFields[]>>
    clicked? : boolean
}

export interface ProductProp extends ProductType{
    cart: cartFields[],
    setcart: React.Dispatch<React.SetStateAction<cartFields[]>> 
}
export interface CartHeadProp{
    clicked: boolean,
    setClicked : React.Dispatch<React.SetStateAction<boolean>>
    cart: cartFields[]
}

export interface ProductsProp {
    cart: cartFields[],
    setcart: React.Dispatch<React.SetStateAction<cartFields[]>>
}

export interface cartFields{
    name: string;
    price: number;
    units : number;
}