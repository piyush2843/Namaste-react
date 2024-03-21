import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{
    const [RestroList,setRestrolist] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestro,setFilteredRestro] = useState([]);
    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency  array is [btnName] => called everytime btnName is updated
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       // "https://crossorigin.me/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        setRestrolist(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const status = useOnlineStatus();
    if(status === false){
      return(
        <h1>No Internet,please check your internet connection!!!</h1>
      );
    };
    return RestroList.length === 0 ? <Shimmer/> :( 
        <div>
            <div className="restaurant-container">
              <div className="filter">
                <input type="text" 
                className="border border-black"
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
                value={searchText}/>
                <button className="m-4 bg-green-300 px-4 py-1 rounded-[7px]" onClick={()=>{
                  const sortedList = RestroList.filter((res)=>{
                    return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                  });
                  setFilteredRestro(sortedList);
                }}>search</button>
                <button 
                className="m-5 bg-gray-200 p-1 rounded-xl py-1 px-2" 
                onClick={()=>{
                  let newlist = RestroList.filter(
                    (res)=> res?.info?.avgRating > 4
                    );
                  setFilteredRestro(newlist);
                }}
                >Top Rated Restaurant</button>
              </div>
                <div className=" restaurant-container flex flex-wrap">
                  {
                    filteredRestro.map((restro)=>(
                      <Link key={restro?.info?.id} to={"./restaurant/" + restro?.info?.id}><RestaurantCard  resdata={restro}/></Link>
                    ))
                  }
                </div>
            </div>
        </div>
    );
}
export default Body;