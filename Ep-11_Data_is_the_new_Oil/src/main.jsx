import React,{ lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./Components/About"
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Body from './Components/Body.jsx'
import  RestaurantMenu  from './Components/RestaurantMenu.jsx'
import { Suspense } from 'react'
import Shimmer from './Components/Shimmer.jsx'

//Lazy Import
const Grocery = lazy(()=> import("./Components/Grocery.jsx"));

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
const appRouter = createBrowserRouter([
  {/* this is comment in jsx*/ },
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contactus",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },{
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
