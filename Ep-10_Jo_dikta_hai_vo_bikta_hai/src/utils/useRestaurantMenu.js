import { useEffect, useState } from "react";
import { API_URL } from "../utils/contant";

const useRestaurantMenu = (resId)=>{
    const [ResData,setResData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch(API_URL + resId);
        const jsonData = await data.json();
        setResData(jsonData);
    }
    return ResData;
}
export default useRestaurantMenu;