import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});
const urwGeometric = localFont({
  src: [
    {
      path: "../../public/fonts/urw-geometric/URWGeometricThin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricExtraLight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricSemiBold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricBold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricExtraBold.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/urw-geometric/URWGeometricBlack.otf",
      weight: "900",
    },
  ],
  variable: "--font-urw-geometric",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${(urwGeometric.variable, publicSans.variable)}`}>{children}</body>
    </html>
  );
}
