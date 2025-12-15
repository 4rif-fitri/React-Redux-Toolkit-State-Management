import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectCartTotalItem } from '../feature/cart/cardSlice';



const Header = ({ hendleShowModa }) => {
  let cartTotalItem = useSelector(selectCartTotalItem);
  // console.log(cartTotalItem);

  return (
    <>
      <header className="bg-blue-700 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-xl font-bold text-green-100">E-Commerce</h1>
            <button
              type="button"
              className=" relative rounded-full bg-blue-800 p-2 text-gray-100"
              onClick={() => hendleShowModa()}
            >
              <span
                className=" absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-sm
               flex items-center justify-center"
              >
                {cartTotalItem}
              </span>
              <MdAddShoppingCart />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header
