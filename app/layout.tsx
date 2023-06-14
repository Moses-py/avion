import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const clash_display = localFont({
  src: [
    {
      path: "../public/clash display/ClashDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/clash display/ClashDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/clash display/ClashDisplay-Light.ttf",
      weight: "200",
    },
    {
      path: "../public/clash display/ClashDisplay-Extralight.ttf",
      weight: "100",
    },
    {
      path: "../public/clash display/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/clash display/ClashDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-clash_display",
});
const satoshi = localFont({
  src: [
    {
      path: "../public/satoshi/Satoshi-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/satoshi/Satoshi-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/satoshi/Satoshi-Light.ttf",
      weight: "200",
    },
    {
      path: "../public/satoshi/Satoshi-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/satoshi/Satoshi-Black.ttf",
      weight: "800",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${clash_display.variable} font-sans ${satoshi.variable} font-serif`}
      >
        <Navigation />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {children}
      </body>
    </html>
  );
}
