import { Navbar } from "@/components";
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
        <body className="relative">
          <Navbar />
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
