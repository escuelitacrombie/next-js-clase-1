"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

type FormValue = {
  id: number;
  description?: string;
  name?: string;
  price?: string;
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({
    id: 0,
    description: "",
    name: "",
    price:"",
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const parsedFormValues = { ...values, price: Number(values.price) };
      fetch(`/api/products`, {
        method: "PUT",
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
      <h1> update producto </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <label htmlFor="">id</label>
        <input onChange={handleChangeInput} type="text" name="id" id="name" />

        <label htmlFor="">nombre</label>
        <input onChange={handleChangeInput} type="text" name="name" id="name" />

        <label htmlFor="">desc</label>
        <input
          onChange={handleChangeInput}
          type="text"
          name="description"
          id="description"
        />

        <label htmlFor="">price</label>
        <input
          onChange={handleChangeInput}
          type="number"
          name="price"
          id="price"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}