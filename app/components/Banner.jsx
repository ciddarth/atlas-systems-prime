import Image from "next/image";
import Button from "./general/Button";

const TRUST_BADGES = [
  { icon: "/images/general/minutes.png", label: "Minutes, Not Weeks" },
  { icon: "/images/general/zero-vectors.png", label: "Zero Vendors" },
  { icon: "/images/general/complaint.png", label: "100% Compliant" },
];

export default function Banner() {
  return (
    <section className="bg-white pt-20 px-6 overflow-hidden flex flex-col items-center" aria-labelledby="banner-heading">
      <div className="container w-full mx-auto flex flex-col items-center text-center">

        <h1 id="banner-heading" className="text-black tracking-tight mb-8">
          Generate Print-Ready,<br />
          CMS-Compliant Directories in Minutes
        </h1>

        {/* Trust badges */}
        <ul className="flex flex-wrap justify-center items-center gap-4 mb-8 list-none" aria-label="Key benefits">
          {TRUST_BADGES.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-textbody bg-white px-5 py-2 rounded-full shadow-sm">
              <Image
                src={b.icon}
                alt=""
                width={16}
                height={16}
                className="object-contain shrink-0"
                aria-hidden="true"
              />
              <span className="text-gray-text">{b.label}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button id="banner-cta" className="mb-16">
          Get A PRIME® Demo
        </Button>

        {/* Hero Image */}
        <div className="relative w-full max-w-[1000px] mx-auto rounded-t-2xl overflow-hidden shadow-[0_-4px_40px_rgba(1,1,1,0.08)] bg-white border border-gray-100">
          <Image
            src="/images/general/banner-img-prime.png"
            alt="PRIME directory preview showing sample health network data"
            width={1200}
            height={600}
            className="w-full h-auto object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
