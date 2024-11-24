import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Labaid Aesthetic & Laser Lounge",
  description: "Premium Aesthetic and Laser Treatments",
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-saira">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
