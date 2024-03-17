import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/contant";
const RestaurantMenu = ()=>{
    const [ResData,setResData] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchResInfo();
    },[]);
    const fetchResInfo = async ()=>{
        const menuData = await fetch(API_URL + resId);
        const jsonData = await menuData.json();
        setResData(jsonData);
    }
    if(ResData === null ) return <Shimmer/>;
    const { name,cuisines,costForTwoMessage } = ResData?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
    return(
        <div className="menu ml-[45%] pt-[50px] ">
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