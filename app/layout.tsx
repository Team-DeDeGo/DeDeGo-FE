import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "DeDeGo",
  description: "개발 전문 용어가 어려운 당신에게 - 디디고",
  openGraph: {
    title: "DeDeGo",
    description: "개발 전문 용어가 어려운 당신에게 - 디디고",
    images: [
      {
        url: "/og-image.png",
        width: 130,
        height: 200,
        alt: "DeDeGo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "DeDeGo",
    description: "개발 전문 용어가 어려운 당신에게 - 디디고",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
