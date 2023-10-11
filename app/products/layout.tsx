import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Pagina de products",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-green-200">{children}</div>;
}
