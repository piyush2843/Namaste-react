import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/contant";addItem
import { addItem } from "../utils/cartSlice";
import AppStore from "../utils/AppStore";


const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const addItemHandler = (item)=>{
        //Dispatch an action 
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item)=>(
                <div key={item?.card.info?.id}  >
                    <div className="mb-4 flex justify-between">
                        <div className="w-[70%]">   
                            <h2 className=" font-[300] text-xl my-1"> {item?.card?.info?.name}</h2>
                            <h2 className="mb-2">&#8377; { item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</h2>
                            <p className=" text-[14px]">{item?.card?.info?.description}</p>
                        </div>
                        <div >
                            { item?.card?.info?.imageId ? <img className=" h-[125px] w-[125px] mt-4 mr-2 rounded-lg" src={IMG_URL + item?.card?.info?.imageId} alt="img" />: " "}
                            <button
                                onClick={()=> addItemHandler(item)} 
                                className="rounded-lg border shadow-lg border-gray-200 px-4 py-2 mx-6 my-2 text-green-500 text-[15px] font-[700] bg-white"> 
                                ADD
                            </button>
                        </div>
                    </div> 
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default ItemList;