"use client";
import Link from "next/link";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

export type FormValue = {
  description?: string;
  name?: string;
  price?: string;
  image?: string
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({});

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const parsedFormValues = { ...values, price: Number(values.price) };
      fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(parsedFormValues),
      });
    },
    [values]
  );

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Crear producto </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChangeInput} type="text" name="name" id="name" placeholder="Nombre" />
        <input
          onChange={handleChangeInput}
          type="text"
          name="description"
          id="description"
          placeholder="Descripción"
        />
        <input
          onChange={handleChangeInput}
          type="number"
          name="price"
          id="price"
          placeholder="Precio"
        />
        <input
          onChange={handleChangeInput}
          type="text"
          name="image"
          id="image"
          placeholder="Imagen (formato URL)"
        />
        <button type="submit">Submit</button>
        <Link href="/products">Volver al listado de productos</Link>
      </form>
    </main>
  );
}
