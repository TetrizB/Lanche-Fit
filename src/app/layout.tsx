import type { Metadata } from "next";
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
  display: 'block',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'block',
});

export const metadata: Metadata = {
  title: "Fast Fit: Comida Boa e Leve em 10 Minutos",
  description:
    "Prepare refeições leves, rápidas e com gosto real — sem castigo.",
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
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1757199198492512');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} 
               src="https://www.facebook.com/tr?id=1757199198492512&ev=PageView&noscript=1"/>
        </noscript>
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
