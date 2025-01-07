import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/AnonymousPro-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Raleway-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Majstor na kvadrat",
  description: "Uvijek spremni na razgovor, savjete i dogovor sa Vama.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
