import { createSlice } from "@reduxjs/toolkit";

let initState = {
	cartItem:[],
}

export let cartSlice = createSlice({
	name:"cart",
	initialState:initState,
	reducers:{
		addToCart: (state,actions) => {
			let newItem = actions.payload
			// state.cartItem.push(newItem)//add item
			// console.log(actions.payload); // object			

			let itemIndex  = state.cartItem.findIndex(
				product => product.id === newItem.id
			)
			
			if (itemIndex !== -1) {
        //ada
      //   state.cartItem[itemIndex].quantity += 1;
      //   state.cartItem[itemIndex].totalPrice =
      //     state.cartItem[itemIndex].quantity * newItem.price;
        // item sudah ada
        state.cartItem[itemIndex].quantity += 1;
        state.cartItem[itemIndex].totalPrice =
          state.cartItem[itemIndex].quantity * newItem.price;
      } else {
      //   state.cartItem.push({
      //     ...newItem,
      //     quantity: 1,
      //     totalPrice: newItem.price,
      //   });
        // item baru
        state.cartItem.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

		},
		removeItemCart: () => {
			console.log("remove");
			
		}
	}
})

export let { addToCart, removeItemCart } = cartSlice.actions;

export default cartSlice

//selector
export let selectCartItem = (state) => state.cart.cartItem
export let selectCartTotalItem = (state) => 
	state.cart.cartItem.reduce((total,item) => 
		total + item.quantity,0)

