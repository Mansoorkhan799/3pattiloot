import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { generateSEO, generateWebsiteSchema, generateOrganizationSchema, generateMobileAppSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = generateSEO({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const mobileAppSchema = generateMobileAppSchema();

  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/3 Patti Loot.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/3 Patti Loot.webp" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00FF88" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* JSON-LD Structured Data for SEO and AI Bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppSchema),
          }}
        />
      </head>
      <body className="bg-gaming-darker text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

