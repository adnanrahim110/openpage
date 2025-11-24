import AppShell from "@/components/system/AppShell";
import { Barlow_Semi_Condensed, Cinzel, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Book Publishing Services for Authors | Open Page Publishing",
  description:
    "Open Page Publishing offers expert editing, design, and book publishing services for authors. Publish your book with confidence and reach readers worldwide.",
  keywords: [
    "book publishing services",
    "professional book publishers",
    "publish your book",
    "self-publishing support",
    "book editors and designers",
    "author marketing services",
    "book formatting services",
    "publish book in USA",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7KHZYTNLYJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7KHZYTNLYJ');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17614377946"
          strategy="afterInteractive"
        />
        <Script id="gtag-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7KHZYTNLY');
            gtag('config', 'AW-17614377946');
          `}
        </Script>

        <Script id="uet-loader" strategy="afterInteractive">
          {`(function(w,d,t,r,u){
            var f,n,i;
            w[u]=w[u]||[],f=function(){
            var o={ti:"187220074", enableAutoSpaTracking: true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
            },
            n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
            var s=this.readyState;
            s && s!=="loaded" && s!=="complete" || (f(),n.onload=n.onreadystatechange=null)
            },
            i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
         `}
        </Script>

        <Script id="uet-consent-default" strategy="afterInteractive">
          {`window.uetq = window.uetq || [];
            window.uetq.push('consent', 'default', {
              'ad_storage': 'denied',
            });
          `}
        </Script>

        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Open Page Publishing",
            "url": "https://openpagepublishing.com/",
            "logo": "https://openpagepublishing.com/images/openpage-logo-5-01.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(214) 506 0709",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/openpagepublishing",
              "https://www.instagram.com/openpagepublishing/"
            ]
          }
        `}
        </Script>
      </head>
      <body
        className={`${barlow.variable} ${cinzel.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        <Script id="uet-consent-update" strategy="afterInteractive">
          {`window.uetq = window.uetq || [];
            window.uetq.push('consent', 'update', {
              'ad_storage': 'granted',
            });
          `}
        </Script>

        <Script id="tawk-loader" strategy="lazyOnload">
          {`var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/68e03f99be3099194f455450/1j6lvgs62';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
