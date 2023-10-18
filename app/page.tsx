"use client";

import uploadFile from "@/lib/update-file";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Home </h1>
      <img src="https://guls-escuelita-api-mainst-escuelitabucketc7b4e42a-1e9sgj383k6ak.s3.amazonaws.com/d1336eb4-b162-441d-91d3-86324e4416bc.png" />
      <input
        type="file"
        onChange={async (e) => {
          console.log("entro");
          const result = await uploadFile(e.target.files[0]);
          console.log("result", result);
        }}
      />
    </main>
  );
}
