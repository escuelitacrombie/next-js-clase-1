"use client"
import React, { useState } from 'react'
import UpdateProduct from './update';
import { Product } from '@prisma/client';
export default function EditButton( {product}:{product:Product}) {
  const [editar, setEditar] = useState(false);

  return (
    <div><button
      className='bg-blue-500 border-blue-800'
      onClick={()=>{
        setEditar(!editar)

      }}
    >{editar? "CANCELAR": "EDITAR"}</button>
    {
      editar? <UpdateProduct params={product}/> : <p></p>
    }
      
    </div>

  )
}
