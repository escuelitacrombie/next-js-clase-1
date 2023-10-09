"use client"
import {useState} from 'react'

type FormValue = {
    description?: string;
    name?: string;
    price?: number;
    photo?:string;
  };

export default function UpdateProduct({params}:{params:{id:number}}) {
    const [name, setName] =useState("");
    const [photo, setPhoto] =useState("");
    const [precio, setPrice] =useState("");
    const [description, setDescription] =useState("");
    

    async function update( dat:FormValue,id: number) {
        const res = await fetch('/api/products/' + id, {
          method: 'PUT',
          body: JSON.stringify(dat),
        })
        const data = await res.json()
        console.log("producto ", id, " EDITADO")
    
      }
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const price=Number(precio)
            update( {name,description,price,photo},params.id)
        }} className="flex flex-col gap-4">
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="name" />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder="description"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          id="price"
          placeholder="price"
        />
        <input
          onChange={(e) => setPhoto(e.target.value)}
          type="text"
          name="photo"
          id="photo"
          placeholder="photo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
