import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const fontBody = Inter({ subsets: ["latin"] });

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fontBody.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
