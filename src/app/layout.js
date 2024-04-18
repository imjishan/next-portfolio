import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Providers } from "./providers";
import AvatarIcon from "@/components/Avatar/AvatarIcon";

const roboto = Roboto({
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
        <Providers>
          <main>
            <div className="z-20">
              <Header />
              <AvatarIcon />
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
