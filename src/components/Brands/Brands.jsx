import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';

export default function Brands() {
  
const [isLoading, setIsLoading] = useState(false)

async function getAllBrands() {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  console.log(data,"hello from BRANDSSSS"); 
}
useEffect(() => {
  getAllBrands()
},[])
  
{/* <div className="flex justify-center items-center bg-slate-50/35 absolute inset-0">
  <BounceLoader color='#0aad0a' />
  </div> */}
  return (
    
<div className="max-w-sm bg-white border d-flex justify-center items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>
</div>


  )
}
