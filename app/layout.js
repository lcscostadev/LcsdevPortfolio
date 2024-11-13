import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas Costa",
  description: "Lucas Costa's web dev portfólio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white`}>{children}</body>
    </html>
  );
}
