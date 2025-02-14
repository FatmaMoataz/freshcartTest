import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Slider from "react-slick";
import { cartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

export default function ProductDetails() {
 const [details, setDetails] = useState(null);
 const [isLoading, setIsLoading] = useState(true)
 const {id, categoryId} = useParams()
 let {addToCart,getCart} = useContext(cartContext)
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
 
 async function getProductDetails () {
setIsLoading(true)
 try {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  console.log(data);
  setDetails(data.data)
 }
 catch(error) {
console.log(error);

 }
 finally {
setIsLoading(false)
 }
 }

 async function addProductToCart(id) {
  let data = await addToCart(id)
  if(data.status == "success") {
    toast("Product added successfully!",{type:"success", theme:"dark", position:"bottom-right"});
  }
  getCart()
  }

 useEffect(() => {
  getProductDetails()
 },[id])
 if(isLoading) {
  return (
    <div className='main-layout mb-8 flex justify-center items-center h-screen'>
    <BounceLoader color='#0aad0a' />
  </div>
  )
 } 
  return (
    <>
    <div className='main-layout items-center mx-5 py-16 sm:flex-col md:flex-row'>
      <div className="w-4/12 mb-5">
      <Slider {...settings}>
{details?.images.map(src => <img src={src} alt="product item" />)}
</Slider>
      </div>
      <div className="w-8/12">
      <h1 className='mb-4 font-bold'>{details?.title}</h1>
      <p>{details?.description}</p>
      <span>{details?.category?.name}</span>
      <div className="flex justify-between mb-4">
  <p>{details?.price} EGP</p>
  <p>  <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />{details?.ratingsAverage}</p>
 
</div>
<button onClick={() => addProductToCart(details.id)} className='btn w-full bg-[#0aad0a] text-white p-2 rounded-md'>Add To Cart</button>
      </div>
      <h1 className='font-medium text-4xl'>Related Products</h1>
      <RelatedProducts categoryId={details?.category?._id}  />
    </div>
    </>
  )
}
