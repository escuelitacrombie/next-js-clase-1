export default function Poducts({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Products {id} </h1>
    </main>
  );
}
