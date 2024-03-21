import { IMG_URL } from "../utils/contant";
const RestaurantCard = (props)=>{
    const {resdata} = props;
    const {name,cloudinaryImageId,avgRating,sla,cuisines,costForTwo} = resdata?.info;
    return(
        <div className="res-card bg-[#f0f0f0]  w-[250px] m-4 h-[550px] " >
            <img
            src={ IMG_URL + cloudinaryImageId }
            alt="image"
            className="res-img  h-[50%] w-[100%]"
            />
            <h3 className="pl-2 py-2 font-bold text-lg">{name}</h3>
            <h4 className="pl-2 py-2">{cuisines.join(", ")}</h4>
            <h4 className="pl-2 py-2">{avgRating} stars</h4>
            <h4 className="pl-2 py-2">{costForTwo}</h4>
            <h4 className="pl-2 py-2">{sla.deliveryTime} minutes</h4>
        </div>
    );
}
export default RestaurantCard;