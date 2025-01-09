import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"] });
const scriptFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "grid min-h-screen grid-rows-[auto_1fr_auto]",
          bodyFont.className,
          scriptFont.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
