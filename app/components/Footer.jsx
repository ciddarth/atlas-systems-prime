import Image from "next/image";
import Link from "next/link";

const SOLUTIONS = [
  "Provider lifecycle management",
  "Third-party risk management",
  "Cybersecurity management"
];

const SERVICES = [
  "Infrastructure support",
  "Application support",
  "QA services",
  "AI services",
  "Managed security services"
];

const INDUSTRIES = [
  "Life sciences",
  "Health Insurance firms (Payers)",
  "Health systems & Provider groups",
  "BFSI",
  "Manufacturing and services"
];

const COMPANY = [
  "About Atlas",
  "Atlas leadership",
  "Our partners",
  "Our clients"
];

const RESOURCES = [
  "Blogs",
  "Case studies",
  "Videos",
  "eBooks",
  "Podcasts",
  "Brochures",
  "Cybersecurity risk assessment",
  "Alternatives",
  "Comparisons",
  "Atlas PRIME ROI Calculator",
  "SQL 2016 EOL Playbook"
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="container w-full mx-auto">

        {/* Top Logo & Socials Section */}
        <div className="flex flex-col items-start mb-16">
          <div className="mb-6">
            <Image
              src="/images/general/footer-logo.png"
              alt="Atlas Systems Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              {
                name: "LinkedIn",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .52 1 1.28v4.84h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5.2v8.37H8z" />
                  </svg>
                )
              },
              {
                name: "Twitter",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )
              },
              {
                name: "Facebook",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                )
              },
              {
                name: "Instagram",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-200 bg-[#fbfbfb] flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">

          {/* Solutions */}
          <div className="col-span-1">
            <h4 className="text-primary font-medium tracking-wider mb-6">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3">
              {SOLUTIONS.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-textbody hover:text-primary transition-colors leading-relaxed">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-primary font-medium tracking-wider mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-textbody hover:text-primary transition-colors leading-relaxed">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1">
            <h4 className="text-primary font-medium tracking-wider mb-6">
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {INDUSTRIES.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-textbody hover:text-primary transition-colors leading-relaxed">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-primary font-medium tracking-wider mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {COMPANY.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-textbody hover:text-primary transition-colors leading-relaxed">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-primary font-medium tracking-wider mb-6">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {RESOURCES.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-textbody hover:text-primary transition-colors leading-relaxed">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">

            {/* Sales */}
            <div>
              <h4 className="text-primary font-medium tracking-wider mb-3">
                Sales
              </h4>
              <a href="mailto:sales@atlassystems.com" className="text-sm text-textbody hover:text-primary transition-colors break-all">
                sales@atlassystems.com
              </a>
            </div>

            {/* Careers */}
            <div>
              <h4 className="text-primary font-medium tracking-wider mb-3">
                Careers
              </h4>
              <a href="mailto:hr@atlassystems.com" className="text-sm text-textbody hover:text-primary transition-colors break-all">
                hr@atlassystems.com
              </a>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-primary font-medium tracking-wider mb-3">
                Support
              </h4>
              <span className="block text-sm text-textbody mb-1">
                For PRIME® support
              </span>
              <a href="mailto:primehelp@atlassystems.com" className="text-sm text-textbody hover:text-primary transition-colors break-all">
                primehelp@atlassystems.com
              </a>
            </div>

            {/* Media */}
            <div>
              <h4 className="text-primary font-medium tracking-wider mb-3">
                Media
              </h4>
              <a href="mailto:press@atlassystems.com" className="text-sm text-textbody hover:text-primary transition-colors break-all">
                press@atlassystems.com
              </a>
            </div>

          </div>

        </div>

        {/* Footer Copyright Bottom */}
        <div className="border-t border-surface pt-8 flex items-center justify-center">
          <p className="text-sm text-black text-center tracking-tight">
            © 2026 <span className="text-primary font-medium">Atlas Systems</span> • All Rights Reserved • <Link href="#" className="text-primary font-medium hover:underline">Privacy Policy</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
