import type { Metadata } from "next";
import { Roboto, Ribeye_Marrow } from "next/font/google"; // Importa as fontes
import "./globals.css";

// Definição da fonte padrão (exemplo: Roboto)
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto", // Define uma variável CSS
});

// Definição da fonte secundária para usos ocasionais
const ribeyeMarrow = Ribeye_Marrow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ribeye-marrow", // Define outra variável CSS
});

export const metadata: Metadata = {
  title: "Anderson Costa - Dev",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${ribeyeMarrow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
