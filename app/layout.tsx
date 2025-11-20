import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"], // Pesos: Regular, Semi-Bold, Bold
});

export const metadata: Metadata = {
  title: "Cosmora Tech - Soluções de IA",
  description: "O futuro dos negócios começa agora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}