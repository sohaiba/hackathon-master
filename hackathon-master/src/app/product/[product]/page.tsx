import React from 'react'
import FetchData from '../../../../sanity/FetchData';

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item:any) => ({
    product: item.slug.current,
    

    } 
  )
  )}

export default async function page({params}: {params:any})  {
  const data = await FetchData();
  const filteredData = data.find(
    (item:any) => item.slug.current == params.product);

  console.log("params", filteredData);
  return <div>
          <h2>Title: {filteredData.title}</h2>
          <h2>Description: {filteredData.description}</h2>
          <h2>Category: {filteredData.category}</h2>
          <h2>Price: {filteredData.price}</h2>
  </div>
}
