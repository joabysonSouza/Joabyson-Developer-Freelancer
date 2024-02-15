import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";


const popins = Poppins({ subsets: ["latin"], weight:["200"] });

export const metadata: Metadata = {
  title: "Joabyson Freelancer Developer",
  description: "Portfolio 2024",
  
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta charSet="UTF-8"/>
      <body className={popins.className}>{children}</body>
    </html>
  );
}
