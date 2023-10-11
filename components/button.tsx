"use client"
import React from 'react'
import { useRouter } from 'next/navigation';






export default function CardButton( {params}:{params:{id:number}}) {
      const router = useRouter()
      async function deleteProduct(id: number) {
        const res = await fetch('/api/products/' + id, {
            method: 'DELETE',
          })
          const data = await res.json()
          console.log("producto ", id, " eliminado")
          router.refresh()
        }
  return (
    <div>
        <button
        className='bg-red-500 border-red-800'
        onClick={()=>{
            deleteProduct(params.id)
        }} >ELIMINAR {params.id}</button>
    </div>
  )
}
