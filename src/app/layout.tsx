import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import Navbar from "@/components/site/navigation";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ezWeb",
  description: "Ez Website Builder",
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
        <Navbar />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
