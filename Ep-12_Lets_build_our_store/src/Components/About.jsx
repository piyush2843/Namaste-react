import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// or import React from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent Component Mounted");
    }
    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About</h1>
                <div>
                    logged in user
                    <UserContext.Consumer>
                        {({loggedInUser})=>(
                            <h1 className=" text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>I am Learning about Routing in React</h2>
                 <UserClass/>
            </div>
        );
    }
}
// const About = ()=>{
   
// }

export default About;