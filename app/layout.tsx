import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clase 1 Next JS",
  description:
    "Esta es una muestra de como usar next js para los chicos de la escuelita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Link href="/dashboard/categories">Categories</Link> |{" "}
          <Link href="/dashboard/products">Products</Link> |{" "}
          <Link href="/products/create">Create Product</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
