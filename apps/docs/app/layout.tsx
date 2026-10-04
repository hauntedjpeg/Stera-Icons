import type { Metadata, Viewport } from "next";
import { Geist_Mono, Host_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SearchProvider } from "@/components/search-provider";
import { getAllIconNames } from "@/lib/icons";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Stera Icons";
const description = `A collection of ${getAllIconNames().length} hand-crafted icons in 6 variants for Figma and React.`;

const faviconSizes = [16, 32, 96];
const favicons = (scheme: "light" | "dark") =>
  faviconSizes.map((size) => ({
    url: `/favicon-${scheme}-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    media: `(prefers-color-scheme: ${scheme})`,
  }));

const socialImage = {
  url: "/social-image.png",
  width: 1920,
  height: 1080,
  alt: "Stera",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stera.sh"),
  title,
  description,
  icons: {
    icon: [...favicons("light"), ...favicons("dark")],
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SearchProvider>
            <Navbar />
            {children}
            {modal}
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
