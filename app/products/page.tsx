import CardButton from "@/components/button";
import UpdateProduct from "@/components/update";
import prisma from "@/lib/prisma";

export default async function Page() {
  const allProducts = await prisma.product.findMany();

  

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Todos los productos </h1>

      {allProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {product.photo ? <img src={product.photo} alt="" /> : <p></p>}
          <CardButton params={product}/>
          <UpdateProduct params={product} />
        </div>
      ))}
    </main>
  );
}
