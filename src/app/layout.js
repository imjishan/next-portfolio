import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import AvatarCom from "@/components/HeroPage/Avatar";

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
      <body className={roboto.className}>
        <main className="container mx-auto mt-8">
          <Header />
          <AvatarCom />
          {children}
        </main>
      </body>
    </html>
  );
}
