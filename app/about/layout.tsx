import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "Pagina de about",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-orange-400">{children}</div>;
}
