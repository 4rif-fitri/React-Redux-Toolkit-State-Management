import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-blue-700 ">
        <div className="max-w-7xl mx-auto px-4">
			<div className='flex items-center justify-between h-20' >
        		<h1 className='text-xl font-bold text-green-100'>E-Commerce</h1>
				<button type="button" className='relative rounded-full bg-blue-800 p-2 text-gray-100'>
					Cart
				</button>
			</div>
		  </div>
      </header>
    </>
  );
}

export default Header
