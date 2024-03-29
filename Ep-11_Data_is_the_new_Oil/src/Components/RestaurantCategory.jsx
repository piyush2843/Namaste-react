import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // console.log(data);
    const clickHandler = ()=>{
       setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12  m-4 py-2 px-2 bg-gray-100 ">
                <div className="flex justify-between cursor-pointer mb-4" onClick={clickHandler}>
                    <span className=" text-xl text-black font-[500] ">{data?.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>
    );
}
export default RestaurantCategory;