import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utsav Crockery",
  description: "Premium retail crockery and household items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
