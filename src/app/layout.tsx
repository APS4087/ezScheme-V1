// FILE: layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import Navbar from "@/components/site/navigation";
import Footer from "@/components/site/footer/footer";
import Preloader from "@/components/site/preloader/Preloader";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ezScheme",
  description: "Ez Scheme is a solution that simplifies access to government schemes by consolidating information and tailoring it to individual needs.",
  icons: {
    icon: "/assets/ezSchemeLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}