import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Providers } from "./providers";
import AvatarIcon from "@/components/Avatar/AvatarIcon";
import SmoothScrolling from "@/components/SmoothScrolling";

const roboto = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jishan Ahmed | Portfolio",
  description:
    "Jishan Ahmed is a web developer with over 2 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} container mx-auto mt-8`}>
        <SmoothScrolling>
          <main>
            <div className="z-20 relative">
              <Header />
            </div>
            <AvatarIcon />
            {children}
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
