import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const PHOTOS = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/AFek0-QhtdZ1-rZ2ytpeuQ/l.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/tByN7V3hgL3BnCWKWq4Q-Q/l.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/OfOjFwdcLtvFOfKc0sZbAw/l.jpg",
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17v-.08z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "oklch(0.97 0.012 100)", color: "oklch(0.14 0.02 148)", fontFamily: "var(--font-body, Sora, sans-serif)" }}>

      {/* NAV */}
      <nav
        style={{ borderBottom: "1px solid oklch(0.88 0.018 100)", backgroundColor: "oklch(0.97 0.012 100 / 0.95)" }}
        className="sticky top-0 z-50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "var(--font-display, Epilogue, sans-serif)",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "-0.01em",
                color: "oklch(0.14 0.02 148)",
              }}
            >
              Walking &amp; Working
            </span>
            <span
              className="hidden sm:inline text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: "oklch(0.30 0.09 148 / 0.10)", color: "oklch(0.30 0.09 148)" }}
            >
              Licensed &amp; Insured
            </span>
          </div>
          <a
            href="tel:+15594938383"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ backgroundColor: "oklch(0.30 0.09 148)", color: "oklch(0.97 0.012 100)" }}
            aria-label="Call Walking and Working Landscape Maintenance"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">(559) 493-8383</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-10 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            {/* 23-year badge — this is the story */}
            <div
              className="inline-flex items-baseline gap-2 mb-5 anim-0"
              style={{
                backgroundColor: "oklch(0.30 0.09 148 / 0.08)",
                border: "1px solid oklch(0.30 0.09 148 / 0.18)",
                borderRadius: "9999px",
                padding: "0.4rem 0.9rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display, Epilogue, sans-serif)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "oklch(0.30 0.09 148)",
                }}
              >
                23 Years
              </span>
              <span className="text-sm" style={{ color: "oklch(0.44 0.07 148)" }}>
                Licensed &amp; Insured in Fresno
              </span>
            </div>

            <h1
              className="anim-1"
              style={{
                fontFamily: "var(--font-display, Epilogue, sans-serif)",
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "oklch(0.12 0.02 148)",
              }}
            >
              Fresno&apos;s{" "}
              <span
                style={{
                  color: "oklch(0.30 0.09 148)",
                  fontStyle: "italic",
                }}
              >
                Reliable
              </span>{" "}
              Lawn Crew
            </h1>

            <p
              className="mt-5 text-base leading-relaxed anim-2"
              style={{ color: "oklch(0.38 0.03 148)", maxWidth: "46ch" }}
            >
              Residential and commercial lawn maintenance done right — mowing, edging, weed control, and full yard upkeep. Open every day of the week, early to late.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 anim-2">
              {["Licensed & Insured", "Residential & Commercial", "Open 7 Days"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "oklch(0.44 0.025 148)" }}
                >
                  <span style={{ color: "oklch(0.30 0.09 148)" }}><CheckIcon /></span>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 anim-3">
              <a
                href="tel:+15594938383"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                style={{ backgroundColor: "oklch(0.30 0.09 148)", color: "oklch(0.97 0.012 100)" }}
                aria-label="Call for lawn service"
              >
                <PhoneIcon />
                (559) 493-8383
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-[oklch(0.92_0.016_100)] active:scale-[0.97]"
                style={{ border: "1px solid oklch(0.82 0.020 100)", color: "oklch(0.30 0.06 148)" }}
              >
                Our Services
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-xs anim-3" style={{ color: "oklch(0.55 0.025 148)" }}>
              <span className="flex items-center gap-1.5"><ClockIcon /> Mon–Sun, early mornings to 9pm</span>
              <span className="flex items-center gap-1.5"><MapPinIcon /> Fresno, CA</span>
            </div>
          </div>

          {/* Right: Photo grid */}
          <div className="grid grid-cols-2 gap-3 anim-1">
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] row-span-2">
              <Image
                src={PHOTOS[0]}
                alt="Walking and Working Landscape — Fresno lawn care"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src={PHOTOS[1]}
                alt="Lawn maintenance work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src={PHOTOS[2]}
                alt="Yard cleanup work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section
        style={{ backgroundColor: "oklch(0.30 0.09 148)", color: "oklch(0.97 0.012 100)" }}
        className="py-10"
      >
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "23", label: "Years Experience" },
            { value: "5★", label: "Google Rating" },
            { value: "7", label: "Days a Week" },
            { value: "2003", label: "Serving Fresno Since" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "var(--font-display, Epilogue, sans-serif)",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "oklch(0.90 0.04 100)",
                }}
              >
                {value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "oklch(0.75 0.03 148)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "oklch(0.30 0.09 148)" }}>
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, Epilogue, sans-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "oklch(0.12 0.02 148)",
            }}
          >
            Full-Service Lawn Care
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <ScissorsIcon />,
              title: "Lawn Mowing & Edging",
              description: "Regular mowing and clean edge work for residential and commercial properties. Consistent schedules to keep your property looking sharp.",
            },
            {
              icon: <LeafIcon />,
              title: "Weed Control",
              description: "Manual and chemical weed removal for lawns and garden beds. We get the weeds out and keep them out.",
            },
            {
              icon: <SunIcon />,
              title: "Yard Maintenance",
              description: "Ongoing upkeep that covers everything your yard needs — trimming, cleanup, and seasonal work done right.",
            },
            {
              icon: <BuildingIcon />,
              title: "Commercial Service",
              description: "Reliable commercial lawn maintenance for businesses, apartment complexes, and managed properties throughout Fresno.",
            },
            {
              icon: <ShieldIcon />,
              title: "Licensed & Insured",
              description: "23 years in the field, fully licensed and insured. You get the peace of mind that comes with a professional operation.",
            },
            {
              icon: <ClockIcon />,
              title: "Flexible Hours",
              description: "Open every day of the week, from early morning to 9pm. We work around your schedule, not the other way around.",
            },
          ].map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{ backgroundColor: "oklch(0.94 0.016 100)", borderTop: "1px solid oklch(0.86 0.018 100)", borderBottom: "1px solid oklch(0.86 0.018 100)" }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.30 0.09 148)" }}>
                Why Choose Us
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display, Epilogue, sans-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "oklch(0.12 0.02 148)",
                }}
              >
                Two Decades on the Ground in Fresno
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.38 0.025 148)", maxWidth: "52ch" }}>
                Starting in 2003, Walking &amp; Working has built its reputation by showing up, doing the work right, and coming back. Residential clients count on consistent weekly schedules. Commercial properties get the professional reliability their managers expect.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.38 0.025 148)", maxWidth: "52ch" }}>
                Fully licensed and insured — because you shouldn&apos;t have to wonder. Our Yelp photos show the kind of work we do. Our track record speaks for itself.
              </p>
            </div>
            <div>
              {/* Hours breakdown */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid oklch(0.86 0.018 100)", backgroundColor: "oklch(0.99 0.006 100)" }}
              >
                <div
                  className="px-5 py-3 font-semibold text-sm"
                  style={{
                    backgroundColor: "oklch(0.30 0.09 148)",
                    color: "oklch(0.97 0.012 100)",
                    fontFamily: "var(--font-display, Epilogue, sans-serif)",
                  }}
                >
                  Hours of Operation
                </div>
                {[
                  { day: "Monday", hours: "7:00 am – 9:00 pm" },
                  { day: "Tuesday", hours: "7:00 am – 8:30 pm" },
                  { day: "Wednesday", hours: "9:00 am – 8:00 pm" },
                  { day: "Thursday", hours: "7:00 am – 9:00 pm" },
                  { day: "Friday", hours: "7:00 am – 9:00 pm" },
                  { day: "Saturday", hours: "9:00 am – 9:00 pm" },
                  { day: "Sunday", hours: "7:00 am – 8:30 pm" },
                ].map(({ day, hours }, i) => (
                  <div
                    key={day}
                    className="px-5 py-3 flex justify-between items-center text-sm"
                    style={{
                      borderTop: i > 0 ? "1px solid oklch(0.90 0.014 100)" : "none",
                      color: "oklch(0.30 0.04 148)",
                    }}
                  >
                    <span className="font-medium">{day}</span>
                    <span style={{ color: "oklch(0.46 0.03 148)" }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        <div className="max-w-xl">
          <div className="flex gap-0.5 mb-4" style={{ color: "oklch(0.68 0.12 80)" }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <blockquote
            className="leading-relaxed mb-4"
            style={{
              fontFamily: "var(--font-display, Epilogue, sans-serif)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 600,
              color: "oklch(0.14 0.02 148)",
              fontStyle: "italic",
            }}
          >
            &ldquo;A 5-star lawn service — professional, reliable, and they always do a superb job. Both commercial and residential, whatever the property, the quality is the same.&rdquo;
          </blockquote>
          <p className="text-xs" style={{ color: "oklch(0.55 0.025 148)" }}>
            — Patrick D., Fresno · Verified review
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        style={{ backgroundColor: "oklch(0.94 0.016 100)", borderTop: "1px solid oklch(0.86 0.018 100)" }}
        className="py-16 lg:py-24"
      >
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display, Epilogue, sans-serif)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "oklch(0.12 0.02 148)",
            }}
          >
            Ready to Schedule?
          </h2>
          <p className="mb-7 text-base leading-relaxed" style={{ color: "oklch(0.42 0.025 148)" }}>
            Call us to get started. Open 7 days, early mornings to 9pm — we work on your schedule.
          </p>
          <a
            href="tel:+15594938383"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ backgroundColor: "oklch(0.30 0.09 148)", color: "oklch(0.97 0.012 100)" }}
            aria-label="Call Walking and Working Landscape Maintenance"
          >
            <PhoneIcon />
            (559) 493-8383
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs" style={{ color: "oklch(0.55 0.025 148)" }}>
            <span className="flex items-center gap-1.5"><ClockIcon /> Open 7 days · 7am to 9pm</span>
            <span className="flex items-center gap-1.5"><MapPinIcon /> Fresno, CA 93706</span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Walking%20and%20working%20landscape%20maintenance&query_place_id=ChIJb9D91EVhlIARonuzLxKPzls"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.30 0.09 148)" }}
            >
              Get Directions →
            </a>
            <a
              href="https://www.yelp.com/biz/walking-and-working-landscape-maintenance-fresno"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.30 0.09 148)" }}
            >
              View on Yelp →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid oklch(0.86 0.018 100)" }} className="py-7">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "oklch(0.55 0.025 148)" }}>
          <span style={{ fontFamily: "var(--font-display, Epilogue, sans-serif)", fontWeight: 700, color: "oklch(0.28 0.06 148)" }}>
            Walking &amp; Working Landscape Maintenance
          </span>
          <span>Fresno, CA · (559) 493-8383 · Licensed &amp; Insured Since 2003</span>
        </div>
      </footer>
    </div>
  );
}
