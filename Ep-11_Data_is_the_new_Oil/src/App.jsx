import Header from "./Components/Header"
import Body from "./Components/Body"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import UserContext from "./utils/UserContext"

function App() {
  const [userName,setUserName] = useState("");

  useEffect(()=>{
    //Make an API call and send username and password
    const data = {
      name:"Piyush",
    }
    setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
        <Header/>
        <Outlet/>
    </UserContext.Provider>
  )
}
export default App
