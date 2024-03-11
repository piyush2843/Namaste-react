import IMG from "../assets/Tasty_Trove.png"
const Header = ()=>{
    return(
        <div className="header flex border border-black ">
            <div className="logo-container w-[30%] flex justify-center">
                <img src={IMG} className="logo h-[200px] w-[200px]"/>
            </div>
            <div className="nav-items w-[70%] flex justify-center items-center">
                <ul className="flex">
                    <li className="pr-24 text-2xl">Home</li>
                    <li className="pr-24 text-2xl">About Us</li>
                    <li className="pr-24 text-2xl">Contact Us</li>
                    <li className="pr-24 text-2xl">Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;