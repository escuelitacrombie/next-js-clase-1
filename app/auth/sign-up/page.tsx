"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

type FormValue = {
  email?: string;
  password?: string;
  role?: "admin" | "user";
};

export default function Page() {
  const [values, setValues] = useState<FormValue>({});

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      fetch("/api/auth/sign-up", {
        method: "POST",
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
      <h1> Registrar </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChangeInput} type="email" name="email" />
        <input
          onChange={handleChangeInput}
          type="password"
          name="password"
          id="password"
        />
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setValues((prev) => ({
              ...prev,
              role: e.target.value as "admin" | "user",
            }))
          }
          name="role"
          id="role"
          defaultValue="user"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
