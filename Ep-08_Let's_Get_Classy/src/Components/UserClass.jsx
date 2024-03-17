import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Somewhere on the Earth",
                twitter_username:"abc@gmail.com"
            }
        }
    }
    async componentDidMount(){
     const data = await fetch("https://api.github.com/users/akshaymarch7");
     const jsonData = await data.json();
     //debugger;
     this.setState({
        userInfo:jsonData,
     })
    }
    componentDidUpdate(prevPros,prevState){
        if(this.state.userInfo !== prevState.userInfo){
            console.log("Component Did Update");
        }
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    render(){
        const {name,location,twitter_username} = this.state.userInfo; 
        return(
            <div className="user-card border border-black w-[20%]">
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: {twitter_username}</h4>
            </div>
        );
    };
}
export default UserClass;