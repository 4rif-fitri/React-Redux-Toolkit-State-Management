import React, { useState } from 'react'
import Modal from '../../components/Modal'
import { selectCartItem } from './cardSlice'

const CartModal = () => {
	let cartitem = useState(selectCartItem)

  return (
	 <>
		<Modal>
			<div className=' flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]'>
				<div className=' flex flex-col gap-6 max-h-[500px] overflow-auto'>
					{cartitem.map((product) => {
						return (
              <div
                key={product.id}
                className=" w-full border-b-4 border-blue-200 p-md-2"
              >
                <div className="w-[120px] h-auto overflow-hidden">
                  <img src={product.image} alt={product.title} 
						className=' w-full h-full object-cover'/>

                </div>
					 <div className=' ml-10 w-[75%]'>
							<h3 className=' capitalize mt-3 text-lg'>{product.title}</h3>
							<div className=' flex items-center justify-center'>
								<h4 className=''>{product.price}</h4>
								<h4>{product.totalPrice}</h4>
							</div>
							<button type='button' 
							className=' rounded-full bg-blue-400 '>
								-
							</button>
					 </div>
              </div>
            );
					})}
				</div>
			</div>
		</Modal>
	 </>
  )
}

export default CartModal
