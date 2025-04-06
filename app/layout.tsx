import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Lengo",
  description:
    "مكتب متخصص في بيع، شراء، وتأجير البيوت السكنية والتجارية بأفضل الأسعار.",
  keywords: [
    "بيوت",
    "بيع بيوت",
    "شراء بيوت",
    "تأجير بيوت",
    "بيوت سكنية",
    "عقار",
    "مكتب عقاري",
    "بيع عقارات",
    "شراء عقارات",
    "تأجير عقارات",
    "فلل للبيع",
    "شقق للإيجار",
    "عقارات تجارية",
    "عقارات سكنية",
  ],
  icons: {
    icon: "./photo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
