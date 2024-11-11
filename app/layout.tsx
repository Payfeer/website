import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Payfeer - Multi-Currency Wallet",
    default: "Payfeer - Secure Multi-Currency Wallet & Exchange",
  },
  description:
    "Manage your finances effortlessly with Payfeer. Secure multi-currency wallets, instant currency conversions, and flexible withdrawals allow you to control your money globally—all from one powerful app.",

  keywords: [
    "Payfeer",
    "Multi-Currency Wallet",
    "Currency Exchange",
    "Convert Currency",
    "Secure Wallet",
    "Financial Transactions",
    "Global Transactions",
  ],
  openGraph: {
    images: "/opengraph-image.png",
    title: "Payfeer - Secure Multi-Currency Wallet",
    description:
      "Simplify global financial transactions with Payfeer. Convert, transfer, and withdraw with ease—all from one secure app.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

