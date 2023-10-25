"use client";
import uploadFile from "@/lib/update-file";
import { ChangeEvent, useCallback, useState } from "react";

export default function Page() {
  const [file, setFile] = useState<string>();

  const handleUpdateFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const currentFile = e.target.files?.[0];
      if (!currentFile) return;

      const result = await uploadFile(currentFile);
      setFile(result);
    },
    []
  );
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Exampe update image </h1>
      <img src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${file}`} />
      <input type="file" onChange={handleUpdateFile} />
    </main>
  );
}
