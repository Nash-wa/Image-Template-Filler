import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Image Template Filler",
  description: "Fill images with CSV content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        {children}
      </body>
    </html>
  );
}
