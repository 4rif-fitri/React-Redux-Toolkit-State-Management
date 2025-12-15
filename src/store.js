import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart/cardSlice";
// import { createStore } from "@reduxjs/toolkit";

export default configureStore({
	reducer:{
		cart:cartSlice.reducer
	}
});
