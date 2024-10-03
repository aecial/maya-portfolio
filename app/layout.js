import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const lexend = localFont({
  src: "./fonts/Lexend.ttf",
  variable: "--font-lexend",
  weight: "100 900",
});

export const metadata = {
  title: "Maureene's Portfolio",
  description: "Maureene Mae E. Inovejas Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-lexend bg-cute text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
