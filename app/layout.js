import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "International Financial Data Services",
  description: "Leading provider of outsourcing and tech solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
