import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNairaSign } from "@fortawesome/free-solid-svg-icons"
import type { cartFields, ProductProp,ProductsProp, ProductType } from "../utils/types.ts"
import { products } from "../utils/variables.ts"

function cartFilling({name,price,cart,setcart}:ProductProp):void{
    const currentCart: cartFields[] = cart || [];
    let newCart : cartFields[];
    if(currentCart?.find((item)=> item.name == name))
        newCart = currentCart.map(item => {
            if(item.name == name ) 
                return { ...item, units: item.units + 1 }; 
            return item}); 
    else 
        newCart = [...currentCart,{name:name,price:price,units:1}];
    setcart(newCart);
    sessionStorage.setItem("cartItems",JSON.stringify(newCart));
}

const Product : React.FC<ProductProp> = ({name,img,price,cart,setcart},)=>{
    return(
        <div className="flex flex-col border border-gray-100 rounded-md w-75">
            <div>
                <img className="w-75 h-45 rounded-t-md" src={img} alt={name}/>
            </div>
            <div className=" flex flex-row items-center justify-around pl-0.5 pt-6 pb-4 w-75 rounded-b-md border-t border-gray-100" >
                <div>
                    <p className="text-white font-bold w-30 text-nowrap text-2xl">{name}</p>
                    <p className="text-gray-200 text-md"><FontAwesomeIcon icon={faNairaSign}/>{price}.00</p>
                </div>
                <button className="border bg-gray-200 border-gray-100 px-3 h-10 text-nowrap text-lg rounded-md hover:bg-green-600 hover:border-0 hover:text-white" onClick={()=>{cartFilling({name,cart,setcart,price})}} >Add to Cart</button>
            </div>
        </div>
    )
}

const Products: React.FC<ProductsProp> = ({cart,setcart})=>{
    const printProducts : React.FC<ProductType[]> = (products : ProductType[]) => {
        const row1: ProductType[] = products.slice(0,3);
        const row2: ProductType[] = products.slice(3);

        return(<div className="flex flex-col justify-between items-center w-screen pb-10 gap-5 h-fit">
            <div className="flex lg:flex-row flex-col  justify-center lg:gap-8 gap-2 items-center sm:h-fit w-screen">{row1.map(({name,img,price},i) => <Product key={i} name={name} img={img} price={price} cart={cart} setcart={setcart}/>)}</div>
            <div className="flex lg:flex-row flex-col justify-center lg:gap-8 gap-2 items-center sm:-fit w-screen">{row2.map(({name,img,price},i) => <Product key={i+2} name={name} img={img} price={price} cart={cart} setcart={setcart}/>)}</div>
        </div>)
    }
    return printProducts(products);
}

export default Products;