"use client"

import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import {useEffect, useState} from 'react'

type FormValue = {
    id?:number
    description: string;
    name: string;
    price: number;
    photo:string;
  };

export default function UpdateProduct({params}:{params:Product}) {
    const [name, setName] =useState("");
    const [photo, setPhoto] =useState("");
    const [precio, setPrice] =useState("");
    const [description, setDescription] =useState("");
    
    const router = useRouter()
    useEffect(()=>{
      setName(params.name);
      if(params.photo )setPhoto(params.photo);
      setPrice(params.price.toString());
      setDescription(params.description);
    },[params])
    
    async function update( dat:FormValue,id: number) {
        dat.id=id;
        const res = await fetch('/api/products/' + id, {
          method: 'PUT',
          body: JSON.stringify(dat),
        })
        const data = await res.json()
        console.log("producto ", id, " EDITADO")
        router.refresh()
      }
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const price=Number(precio)
            const id=params.id;
            if(id && photo)  update( {name,description,price,photo},id)
        }} className="flex flex-col gap-4">
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" value={name} />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          value={description}
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          id="price"
          value={precio}
        />
        <input
          onChange={(e) => setPhoto(e.target.value)}
          type="text"
          name="photo"
          id="photo"
          required
          value={photo}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
