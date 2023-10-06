"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { redirect } from "next/navigation";

export type FormValue = {
  description?: string;
  name?: string;
  price?: string | Number;
  img?: string;
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({});

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const parsedFormValues = { ...values, price: Number(values.price) };
      await fetch("/api/products", {
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
        <label htmlFor="name">Name</label>
        <input onChange={handleChangeInput} type="text" name="name" id="name" />
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChangeInput}
          type="text"
          name="description"
          id="description"
        />
        <label htmlFor="price">Price</label>
        <input
          onChange={handleChangeInput}
          type="number"
          name="price"
          id="price"
        />
        <label htmlFor="img">Image</label>
        <input onChange={handleChangeInput} type="text" name="img" id="img" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
