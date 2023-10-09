"use client"
import React from 'react'
async function deleteProduct(id: number) {
    const res = await fetch('/api/products/' + id, {
      method: 'DELETE',
    })
    const data = await res.json()
    console.log("producto ", id, " eliminado")
  }
export default function CardButton( {params}:{params:{id:number}}) {
  return (
    <div>
        <button onClick={()=>{
            deleteProduct(params.id)
        }} >ELIMINAR {params.id}</button>
    </div>
  )
}
