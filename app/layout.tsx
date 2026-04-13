import type { Metadata } from "next";
import { Epilogue, Sora } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walking & Working Landscape Maintenance | 23 Years in Fresno",
  description:
    "Licensed and insured lawn care in Fresno, CA. 23 years of experience, residential and commercial maintenance, mowing, edging, weed control, and more. Open 7 days.",
  openGraph: {
    title: "Walking & Working Landscape Maintenance | Fresno's Experienced Lawn Crew",
    description:
      "23 years of licensed, insured lawn care in Fresno. Residential and commercial. Open 7 days, early and late hours.",
    images: [
      {
        url: "https://s3-media0.fl.yelpcdn.com/bphoto/AFek0-QhtdZ1-rZ2ytpeuQ/l.jpg",
        width: 800,
        height: 600,
        alt: "Walking and Working Landscape Maintenance Fresno",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Walking and Working Landscape Maintenance",
              telephone: "(559) 493-8383",
              address: {
                "@type": "PostalAddress",
                streetAddress: "970 E Amber Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93706",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "07:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "07:00", closes: "20:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "21:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "20:30" },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "1",
                bestRating: "5",
              },
              foundingDate: "2003",
              areaServed: "Fresno, CA",
              hasCredential: "Licensed and Insured",
              serviceType: ["Lawn Mowing","Lawn Edging","Weed Control","Yard Maintenance","Commercial Lawn Service"],
              sameAs: ["https://www.yelp.com/biz/walking-and-working-landscape-maintenance-fresno"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
