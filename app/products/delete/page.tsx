'use client'
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'

type FormValue = {
    id: number
  };


export default async function page (){

    const [values, setValues] = useState<FormValue>({id: 0});

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
        
            console.log(values);
            
          e.preventDefault();
    
          fetch(`/api/products/`, {
            method: "DELETE",
            body: JSON.stringify(values),
          });
        },
        [values]
      );

      const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h1> ELIMINAR PRODUCTO </h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input onChange={handleChangeInput} type="text" name="id" id="name" />
      <button type="submit">Submit</button>
    </form>
  </main>
  )
}
