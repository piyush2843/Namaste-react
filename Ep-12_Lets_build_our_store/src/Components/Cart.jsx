import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const clearCartHandler = ()=>{
        dispatch(clearItem());
    }
    return(
        <div className=" text-center">
            <h1 className=" text-2xl font-bold m-10">Cart</h1>
            <button 
            className="border border-black rounded-lg px-2 py-1 bg-green-300" 
            onClick={clearCartHandler}
            >
            Clear Cart
            </button>
            <div className="w-6/12 m-auto text-start">
                {
                cartItems.length === 0 
                ? 
                <div className=" text-center mt-10">
                    <h1>your cart is empty!!! please add some items to it</h1>
                </div>
                 : 
                <ItemList items={cartItems} />}
            </div>
        </div>
    );
}
export default Cart;