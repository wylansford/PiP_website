import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "PiP",
  description: "Pin app windows as floating overlays on macOS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
