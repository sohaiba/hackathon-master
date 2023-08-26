import React from 'react'
import FetchData from '../../../sanity/FetchData';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

export default async function page() {
    const data = await FetchData();
    //console.log("data", data[0].image.asset._ref);
    //console.log("data", data[0].slug);
    //console.log("data", data);
  return (
    <div className="flex gap-5">
        {data.map((product:any, index: number) =>(
            <Link 
              href={`/product/${product.slug.current}`} 
              className = "w-1/4 border border-black p-2" key={index}>
                <img src={urlForImage(product.image).url()} alt=""  className="w-full h-60 object-cover object-top"/>
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>{product.category}</h2>
                <h2>{product.price}</h2>
            </Link>
    ))}

    </div>
  )
}

