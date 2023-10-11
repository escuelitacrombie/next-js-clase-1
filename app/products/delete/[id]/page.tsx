'use client'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'

type FormValue = {
    id: number
  };


export default async function page (){

  const { id } = useParams()

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
        
          e.preventDefault();
    
          fetch(`/api/products/${id}`, {
            method: "DELETE",
          });
        },
        []
      );


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h1> ELIMINAR PRODUCTO por id</h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="">{id}</label>
      <button type="submit">Submit</button>
    </form>
  </main>
  )
}
