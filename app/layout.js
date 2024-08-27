import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kian Silva Portfolio",
  description: "Created By Kian Silva",
  icons: {icon: "/public/favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Kian Silva Portfolio</title>
          <meta name="description" content="Created By Kian Silva" />
          <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
