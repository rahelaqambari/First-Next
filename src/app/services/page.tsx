import Link from 'next/link';
import React from 'react'
const list:{id: number, emoji:string,name:string, price:number}[]=[
  {id: 1,  emoji:"💻", name: "Computer", price:40000 },
  {id: 2,  emoji:"📺", name: "TV", price:12000},
  {id: 3,  emoji:"☎️", name: "Phone", price: 1000},
  {id: 4,  emoji:"🎧", name: "Headphone", price:800},
  {id: 5,  emoji:"📽️", name: "Projector", price:3000},
  {id: 6,  emoji:"📷", name: "Camera", price:13000},
];
function page() {
  return (
    <div className='w-full grid grid-cols-3 gap-6 mt-4'>
      {list.map(product=>(
        <div className='p-4 rounded-md bg-gray-500 text-white'>
          <h1 className='text-9xl text-center'>{product.emoji}</h1>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>{product.id}</h1>
            <h1 className='text-2xl font-bold'>{product.price}</h1>
          </div>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-3xl'>{product.name}</h1>
            <Link className='py-2 px-4 bg-blue-400 rounded-md' href={`services/order/${product.id}`}>Order</Link>
          </div>
      </div>
    ))}

    </div>
  )
}

export default page
