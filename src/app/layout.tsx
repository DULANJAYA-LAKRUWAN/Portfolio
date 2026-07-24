import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: PROFILE.tagline,
  keywords: [
    "Dulanjaya Lakruwan",
    "Dulanjaya.dev",
    "Senior Software Engineer",
    "AI System Architect",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Distributed Systems",
    "RAG AI Assistant",
    "StarChance",
    "CeyOS"
  ],
  authors: [{ name: PROFILE.name, url: "https://dulanjaya.dev" }],
  creator: PROFILE.name,
  openGraph: {
    title: `${PROFILE.name} | Personal Developer Platform`,
    description: PROFILE.tagline,
    url: "https://dulanjaya.dev",
    siteName: "Dulanjaya.dev",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} Portfolio`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: PROFILE.tagline,
    creator: "@dulanjayadev",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for SEO 100
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    url: "https://dulanjaya.dev",
    sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.twitter],
    worksFor: {
      "@type": "Organization",
      name: "Dulanjaya Tech Solutions"
    },
    knowsAbout: [
      "Software Architecture",
      "Distributed Systems",
      "AI Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "RAG Vector Search"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050816] text-[#F9FAFB] min-h-screen selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
