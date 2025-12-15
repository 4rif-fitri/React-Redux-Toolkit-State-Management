import React, { useEffect, useState, useTransition } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, selectCartItem } from "../cart/cardSlice";


const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [isLoadiing, setIsLoadiing] = useState(false);
	let dispach = useDispatch() 
  let cartItem = useSelector(selectCartItem);
  
  // console.log(cartItem);
  

  useEffect(() => {
    let fecthProduct = async () => {
      setIsLoadiing(true);

      try {
        let respon = await fetch("https://fakestoreapi.com/products");
        let datas = await respon.json();
        setProducts(datas);
        // console.log(datas);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadiing(false);
      }
    };

    fecthProduct();
  }, []);

  // console.log(products);

	let hendleClickBuy = (data) => {
		dispach(addToCart(data))
	}

  return (
    <>
      <h1 className=" p-2 fw-bold ">Product List</h1>
      <div className="grid w-full h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((data) => {
          return (
            <div key={data.id} className="group py-4 cursor-pointer bg-white rounded-xl border p-4 m-3 shadow">
              <div className=" relative w-[80%] h-[250px] mx-auto overflow-hidden">
                <img
                  src={data.image}
                  alt={data.title}
                  className=" group-hover:scale-110 duration-500 ease-in-out 
										           w-full h-full object-contain"
                />
              </div>

              <div className=" flex flex-col gap-2 mt-6">
                <h3 className=" fw-bolde">{data.title}</h3>
                <h3 className=" fw-bold">RM {data.price}</h3>
                <button
                  onClick={() => hendleClickBuy(data)}
                  type="button"
                  className="  bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
