import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const ResData = useRestaurantMenu(resId);
    const status = useOnlineStatus();
    if(ResData === null ) return <Shimmer/>;
    // console.log(ResData)
    // console.log(ResData?.data?.cards[2]?.card?.card?.info)
    console.log(ResData?.data?.cards[2]?.card?.card?.info);
    const { name,cuisines,costForTwoMessage } = ResData?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
    const {itemCards} = ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
    return(
        <div className="menu ml-[45%] pt-[50px]">
            <h1 className="text-red-500 text-5xl  py-[20px]">{name}</h1>
            <h3 className="text-3xl py-[5px]">{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h2 className="text-3xl p-[5px] text-red-700 ">Menu</h2>
            {
                itemCards.map((res)=>{
                    return <li className="text-2xl" key={res?.card?.info?.id}>{res?.card?.info?.name} - {"Rs."} {res?.card?.info?.price/100}</li>;
                })
            }             
        </div>
    );
}
export default RestaurantMenu;