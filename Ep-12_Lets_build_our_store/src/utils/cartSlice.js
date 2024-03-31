import { createSlice, current } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state  
            state.items.push(action.payload);
            console.log(current(state))
        },
        removeItem:(state,action)=>{
            state.items.splice();
        },
        clearItem:(state,action)=>{
            state.items.length = 0;
            //or return {items:[]}  this new object  will be repalced inside the origionalState = 
        }
    }
 });

 export const { addItem,removeItem,clearItem} = cartSlice.actions;
 export default cartSlice.reducer;