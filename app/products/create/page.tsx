"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

type FormValue = {
  description?: string;
  name?: string;
  price?: string;
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({});
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const parsedFormValues = { ...values, price: Number(values.price) };
      fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(parsedFormValues),
      }).then(() => router.refresh());
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
        <input onChange={handleChangeInput} type="text" name="name" id="name" />
        <input
          onChange={handleChangeInput}
          type="text"
          name="description"
          id="description"
        />
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
