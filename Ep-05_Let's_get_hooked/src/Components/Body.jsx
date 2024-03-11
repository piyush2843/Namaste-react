import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/resobj";
import { useState } from "react";
const Body = ()=>{
    const [RestroList,setRestrolist] = useState(resobj);
    return (
        <div>
            <div className="restaurant-container">
              <div>
                <button 
                className="m-5 border border-black p-1 rounded-[5px]"
                onClick={()=>{
                  console.log(RestroList);
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
                    RestroList.map((restro)=>(
                      <RestaurantCard key={restro?.info?.id} resdata={restro}/>
                    ))
                  }
                </div>
            </div>
        </div>
    );
}
export default Body;