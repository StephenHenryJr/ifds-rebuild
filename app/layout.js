import { Navbar, Footer } from "@/components";
import "./globals.css";

import { ContextProvider } from "@/contexts/ContextProvider";

export const metadata = {
  title: "International Financial Data Services",
  description: "Leading provider of outsourcing and tech solutions",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <ContextProvider>
        <body className="relative bg-white">
          <Navbar />
          {children}
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
