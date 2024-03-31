import { IMG_URL } from "../utils/contant";
const RestaurantCard = (props)=>{
    const {resdata} = props;
    const {name,cloudinaryImageId,avgRating,sla,cuisines,costForTwo} = resdata?.info;
    return(
        <div className="res-card bg-[#f0f0f0]  w-[250px] m-4 h-[400px] rounded-2xl p-4" >
            <img
            src={ IMG_URL + cloudinaryImageId }
            alt="image"
            className="res-img  h-[50%] w-[100%] rounded-2xl"
            />
            <h3 className="pl-2 py-0.5 m-0.5 font-bold text-lg">{name}</h3>
            <h4 className="pl-2 py-0.5">{cuisines.join(", ")}</h4>
            <h4 className="pl-2 py-0.5">{avgRating} stars</h4>
            <h4 className="pl-2 py-0.5">{costForTwo}</h4>
            <h4 className="pl-2 py-0.5">{sla.deliveryTime} minutes</h4>
        </div>
    );
}

//Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard)=>{
return(props) =>{
    return(
        <div>
            <label className=" absolute bg-black text-white ml-4 rounded-md p-1">Promoted</label>
            <RestaurantCard {...props}/>
        </div> 
    );
}
}
export default RestaurantCard;