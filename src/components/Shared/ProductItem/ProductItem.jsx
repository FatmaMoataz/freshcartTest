import React from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../context/CartContext'


export default function ProductItem(props) {
  
  let {imageCover, title, category, price, ratingsAverage,id} = props.product

    // async function addProductToCart(id) {
    //  let data = await addToCart(id)
    //  if(data.status == "success") {
    //    toast("Product added successfully!",{type:"success", theme:"dark", position:"bottom-right"});
    //  }
    //  getCart()
    //  }
  
  return (
    <div className="md:w-1/3 lg:w-1/6 px-3 mb-3">

<div className="product">
<Link to={`/productDetails/${id}/${category._id}`}>
<img src={imageCover} className='mb-2' alt="product item image" />
<span className='text-main'>{category.name}</span>
<h2 className='mb-4 font-semibold'>{title.split(" ").splice(0,2).join('')}</h2>
<div className="flex justify-between mb-4">
  <p>{price} EGP</p>
  <p>  <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />{ratingsAverage}</p>
</div>
</Link>
<button onClick={() => props.addProductToCart(id)} className='btn w-full bg-[#0aad0a] text-white p-2 rounded-md'>Add To Cart</button>
</div>
</div>
  )
}
