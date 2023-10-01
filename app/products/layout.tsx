import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Pagina de products",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-400">{children}</div>;
}
