import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeTop",
  description:
    "AnimeTop adalah web yang dapat digunakan untuk mencari anime terpopuler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-latar text-white ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
