import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from './ThemeContext';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's imported above

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Honza Hovorka - Senior Software Engineer",
  description: "Personal website of Honza Hovorka, a Senior Software Engineer.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
