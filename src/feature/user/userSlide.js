import { createSlice } from "@reduxjs/toolkit";

let initState = {
  cartItem: [],
};

export let userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    addToCart: (state, actions) => {
      console.log(actions.payload); // object
    },
    removeItemCart: () => {
      console.log("remove");
    },
  },
});

export let { addToCart, removeItemCart } = userSlice.actions;

export default userSlice;
