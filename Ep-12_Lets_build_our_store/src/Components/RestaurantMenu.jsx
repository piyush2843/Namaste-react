import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const ResData = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null );
    const status = useOnlineStatus();
    if(ResData === null ) return <Shimmer/>;
    // console.log(ResData)
    // console.log(ResData?.data?.cards[2]?.card?.card?.info)
    // console.log( ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const { name,cuisines,costForTwoMessage } = ResData?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
    const {itemCards} = ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category = 
    ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
        return category?.card?.card?.["@type"] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    
    // console.log(category);
    // console.log(category)
    return(
        <div className="menu  pt-[50px] flex-col justify-center ml-[45%]">
            <h1 className="text-red-500 text-5xl  py-[20px]">{name}</h1>
            <h3 className="text-3xl py-[5px]">{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h2 className="text-3xl p-[5px] text-red-700 ">Menu</h2>
            {/* {
                itemCards.map((res)=>{
                    return <li className="text-2xl" key={res?.card?.info?.id}>{res?.card?.info?.name} - {"Rs."} {res?.card?.info?.price/100}</li>;
                })
            }   */}
            {
                category.map((category,index)=>{
                    return (
                    <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={ index === showIndex ? true : false}
                    setShowIndex={()=> setShowIndex(index)}
                    />
                    );
                })
            }
            {/* category accordian */}
        </div>
    );
}
export default RestaurantMenu;