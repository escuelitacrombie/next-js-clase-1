"use client";
import { CategoryValue, FormValue } from "@/interfaces/formValue";
import Link from "next/link";
import { useState, useCallback, ChangeEvent, FormEvent, useEffect } from "react";

export default function Page() {
  const [values, setValues] = useState<FormValue>({});
  const [categories, setCategories] = useState<CategoryValue[]>([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo obtener los datos");
        }
        return res.json();
      })
      .then((responseData) => {
        setCategories(responseData);
      });
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const parsedFormValues = {
        ...values,
        price: Number(values.price),
        category: Number(values.category),
      };

      fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(parsedFormValues),
      });
    },
    [values]
  );

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Crear producto </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChangeInput}
          type="text"
          name="name"
          id="name"
          placeholder="Nombre" />
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
        <select id='category' name='category' onChange={handleChangeInput} value={values.category}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.category}</option>
          ))
          }
        </select>
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
