import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Load Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-modern", // Variable untuk Light Mode
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-game", // Variable untuk Dark Mode
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased pt-24 transition-colors duration-500 ease-in-out">
        {/* Navbar, Children, etc */}
        {children}
      </body>
    </html>
  );
}
