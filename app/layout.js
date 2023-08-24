"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// export const metadata = {
//   title: "demo-project",
//   description: "Generated by team 404",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <section className="h-screen"> {children}</section>
        <Footer />
      </body>
    </html>
  );
}
