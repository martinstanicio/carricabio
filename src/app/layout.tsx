import { Inter } from "next/font/google";
import Footer from "@/components/footer";
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
      <body
        className={
          (fontBody.className, "grid min-h-screen grid-rows-[auto_1fr_auto]")
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
