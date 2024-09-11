import Header from "@/components/Header";
import "./css/globals.css";
import type { Metadata } from "next";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: {
    template: "Emzor Pharmacetical Company",
    default: "A leading Pharmaceutical Company",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
      <Header />
        <Menu />
          {children}
           
      </body>
    </html>
  );
}