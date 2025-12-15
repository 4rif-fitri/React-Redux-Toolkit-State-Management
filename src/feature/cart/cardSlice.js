import { createSlice } from "@reduxjs/toolkit";

let initState = {
	cartItem:[],
}

export let cartSlice = createSlice({
	name:"cart",
	initialState:initState,
	reducers:{
		addToCart: (state,actions) => {
			console.log(actions.payload); // object
			
		},
		removeItemCart: () => {
			console.log("remove");
			
		}
	}
})

export let { addToCart, removeItemCart } = cartSlice.actions;

export default cartSlice