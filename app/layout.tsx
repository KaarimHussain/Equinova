import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import EquinovaNavbar from "@/components/base/navbar";
import Footer from "@/components/base/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Equinova",
  description: "The Intelligent Business Platform For Professional Equestrian Facilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <EquinovaNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
