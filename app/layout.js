import "./globals.css";
import { Outfit } from "next/font/google";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'


const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Forge of Justice",
  description: "E-Commerce with Next.js",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
       appearance={{
        baseTheme: dark,
        variables: { colorPrimary: 'lightBlue' },
      }}
    >
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>
            <div
              className="min-h-screen bg-[url('/bg.png')] bg-cover bg-no-repeat bg-fixed"
            >
              {children}
            </div>
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
