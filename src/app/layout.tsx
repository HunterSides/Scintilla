import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
const inter = Inter({ subsets: ["latin"] });
import * as gtag from '../lib/gtag'

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",

  openGraph: {
    type: "website",
    url: "https://scintilla.network",
    title:
      "Scintilla: Real World Asset Tokenization Modular and Scalable Peer-to-Peer Protocol",
    description:
      "Present the Scintilla Real World Asset Tokenization protocol, its architecture and its base components and how it aims at providing a universal protocol for asset transfer and exchange",
    siteName: "Scintilla",
  },
  title:
    "Scintilla: Real World Asset Tokenization Modular and Scalable Peer-to-Peer Protocol",
  description:
    "Present the Scintilla Real World Asset Tokenization protocol, its architecture and its base components and how it aims at providing a universal protocol for asset transfer and exchange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])


  return (
    <html lang="en">
       <head>
         <script
           dangerouslySetInnerHTML={{
             __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
           }}
         />
       </head>
      <body className="min-h-[100vh] bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-flow-row grid-cols-1 gap-[15px] md:grid-cols-2">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
