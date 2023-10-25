"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

type FormValue = {
  email?: string;
  password?: string;
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({});
  const { push } = useRouter();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const result = await axios.post("/api/auth/sign-up", values);
      if (result.status === 201) {
        push("/auth/sign-in");
      }
    },
    [values]
  );

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Registrar </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-gray-400"
          onChange={handleChangeInput}
          type="email"
          name="email"
          id="email"
        />
        <input
          onChange={handleChangeInput}
          className="bg-gray-400"
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
