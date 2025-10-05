import React from 'react'

function ProductCard({ product }) {
  return (
    <div key={product.id} className="product-card bg-white transition-all duration-300 flex flex-col">
      <img src={product.image} alt={product.name} className="w-100 h-[300px] object-fit-contain" />
      {/* <div className='flex-grow-1'></div> */}
      <h1 className='text-xs uppercase text-gray-400 tracking-wide mb-1'>{product.category}</h1>
      <h2 className='text-base font-semibold text-gray-800 mb-1'>{product.name}</h2>
      <span className="text-sm text-gray-600 mb-1">{product.rating}</span>
      <p className='font-semibold mb-3'>₹{product.price}</p>
      <button onClick={() => console.log(`item added to cart: ${product.name}`)} className='w-full border border-gray-500 text-black py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300'>
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard