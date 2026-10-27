import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { CartProvider } from '../context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CASUAL — Architectural Monochrome Apparel',
  description: 'Curated minimalist garments engineered with heavyweight organic textiles and architectural proportions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white`}>
        <CartProvider>
          <Header />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
