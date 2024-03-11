import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{
    const [RestroList,setRestrolist] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestro,setFilteredRestro] = useState([]);

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
        return jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
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
                <button className="ml-1" onClick={()=>{
                  const sortedList = RestroList.filter((res)=>{
                    return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                  });
                  setFilteredRestro(sortedList);
                }}>search</button>
                <button 
                className="m-5 border border-black p-1 rounded-[5px]"
                onClick={()=>{
                  let newlist = RestroList.filter(
                    (res)=> res?.info.avgRating > 4
                    );
                  console.log(RestroList)
                  setRestrolist(newlist);
                }}
                >Top Rated Restaurant</button>
              </div>
                <div className=" restaurant-container flex flex-wrap">
                  {
                    filteredRestro.map((restro)=>(
                      <RestaurantCard key={restro?.info?.id} resdata={restro}/>
                    ))
                  }
                </div>
            </div>
        </div>
    );
}
export default Body;