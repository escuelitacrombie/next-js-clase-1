import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Pagina de categorias",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-blue-400">{children}</div>;
}
