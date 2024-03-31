import { useEffect, useState,useContext } from "react";
import IMG from "../assets/Tasty_Trove.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    const status = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className="header flex border border-black ">
            <div className="logo-container w-[30%] flex justify-center">
                <img src={IMG} className="logo h-[200px] w-[200px]"/>
            </div>
            <div className="nav-items w-[70%] flex justify-center items-center">
                <ul className="flex">
                    <li className="pr-16 text-2xl">Online Status : { status ?"✅":"🔴"}</li>
                    <li className="pr-16 text-2xl"> <Link to={"/"}>Home</Link></li>
                    <li className="pr-16 text-2xl"> <Link to={"/about"}>About Us</Link></li>
                    <li className="pr-16 text-2xl"> <Link to={"/contactus"}>Contact Us</Link></li>
                    <li className="pr-16 text-2xl">  <Link to={"/cart"} >Cart({cartItems.length})</Link></li>
                    <li className="pr-16 text-2xl">  <Link to={"/grocery"} >Grocery</Link></li>
                    <button 
                    className="pr-24 text-2xl" 
                    onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                     <li className="pr-16 text-2xl">  <Link  >{loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;