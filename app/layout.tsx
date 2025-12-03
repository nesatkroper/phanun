import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://me.konkmeng.site"), // <-- change to your real domain

  title: {
    default: "Suon Phanun - Developer Portfolio",
    template: "%s - Suon Phanun - Developer Portfolio",
  },

  description:
    "Professional portfolio showcasing my skills and projects as a developer.",

  keywords: [
    "Suon Phanun",
    "developer",
    "portfolio",
    "web development",
    "frontend",
    "backend",
    "full-stack",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://me.konkmeng.site",
    title: "Suon Phanun - Developer Portfolio",
    description:
      "Professional portfolio showcasing my skills and projects as a developer.",
    siteName: "Suon Phanun Portfolio",
    images: [
      {
        url: "/og-image.png", // MUST be PNG or JPG
        width: 1200,
        height: 630,
        alt: "Suon Phanun Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Suon Phanun - Developer Portfolio",
    description:
      "Professional portfolio showcasing my skills and projects as a developer.",
    images: ["/og-image.png"],
    creator: "@phanun", // if you don't have twitter, remove this line
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}



// import type React from "react";
// import "@/app/globals.css";
// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import Header from "@/components/header";
// import type { Metadata } from "next";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default: "Suon Phanun - Developer Portfolio",
//     template: "%s - Suon Phanun - Developer Portfolio",
//   },
//   description:
//     "Professional portfolio showcasing my skills and projects as a developer",
//   keywords: [
//     "developer",
//     "portfolio",
//     "web development",
//     "frontend",
//     "backend",
//     "full-stack",
//   ],
//   authors: [{ name: "Suon Phanun" }],
//   creator: "Suon Phanun",
//   publisher: "konkmeng",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en' suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute='class'
//           defaultTheme='system'
//           enableSystem
//           disableTransitionOnChange>
//           <Header />
//           {children}
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
