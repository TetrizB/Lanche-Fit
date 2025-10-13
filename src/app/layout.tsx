import type { Metadata } from "next";
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lanche de Nutri",
  description:
    "Transforme sua rotina com 200 lanches saudáveis (e deliciosos de verdade)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`!scroll-smooth ${playfairDisplay.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="https://i.postimg.cc/JD758kH0/Design-sem-nome-7.png" type="image/png" />
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6880317ef7b478570ccb782d";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </body>
    </html>
  );
}
