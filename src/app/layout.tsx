import type { Metadata } from "next";
import "../../public/styles/globals.css";

export const metadata: Metadata = {
  title: "Przemyslaw Swiatlon 3D Portfolio",
  description:
    "Explore the cutting-edge 3D designs and projects by Przemyslaw Swiatlon. Showcasing skills in 3D modeling, design, and more.",
  openGraph: {
    title: "Przemyslaw Swiatlon 3D Portfolio",
    description:
      "Explore the cutting-edge 3D designs and projects by Przemyslaw Swiatlon. Showcasing skills in 3D modeling, design, and more.",
    url: "https://portfolio-swiatlons-projects.vercel.app/",
    type: "website",
    siteName: "Przemyslaw Swiatlon",
    locale: "en_US",
    images: [
      {
        url: "https://portfolio-swiatlons-projects.vercel.app/assets/images/preview.png",
        width: 400,
        height: 400,
        alt: "Developer",
      },
    ],
  },
  // alternates: {
  //   canonical: (pageUrl) => `https://yourwebsite.com`,
  // },
  generator: "Next.js",
  applicationName: "3D Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Przemyslaw Swiatlon" }],
  creator: "Przemyslaw Swiatlon",
  publisher: "Przemyslaw Swiatlon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // manifest: "https://yourwebsite.com/manifest.json",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
