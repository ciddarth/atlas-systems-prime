import Image from "next/image";

export default function FeatureCustomize() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container w-full mx-auto flex flex-col items-center">

        {/* Top Header Section */}
        <div className="text-center max-w-3xl mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4 md:flex-row flex-col">
            <Image
              src="/images/general/checklist.png"
              alt="PRIME Logo Icon"
              width={50}
              height={50}
              className="object-contain"
            />
            <h2 className="">
              <span className="text-5xl text-dark-gray">PRIME </span>Generates
            </h2>
          </div>
          <h2 className="text-black tracking-tight mb-4">
            Print-Ready Directories in{" "}
            <span className="relative inline-block text-primary">
              One Click
              <Image
                src="/images/general/mouse.png"
                alt=""
                width={20}
                height={20}
                className="absolute right-[5%] bottom-[-15%] object-contain pointer-events-none"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="text-textbody">
            Fully formatted, CMS-compliant directories export directly from validated provider data.
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-24 w-full mt-10">
          {[
            {
              tag: "[01] Design",
              title: "Customizable Templates",
              items: [
                "Professional layouts or upload your own brand templates",
                "Control fonts, colors, columns, sections",
                "Different formats for Medicare, Medicaid, Commercial",
                "Save templates for one-click printing in future"
              ],
              image: "/images/general/customize-template.png"
            },
            {
              tag: "[02] Organize",
              title: "Automated Listings",
              items: [
                "Smart categorization by specialty, geography, tier, acceptance status",
                "Dynamic filtering for targeted directories",
                "Duplicate elimination across locations and affiliations",
                "Instant compilation - no spreadsheet work"
              ],
              image: "/images/general/automated-listing.png"
            },
            {
              tag: "[03] Deliver",
              title: "Print-Ready Files",
              items: [
                "High-resolution PDFs with embedded fonts, bleeds, color profiles",
                "Direct delivery via Dropbox, SFTP to your printer",
                "Duplicate elimination across locations and affiliations",
                "Automatic pagination adjusts to content volume"
              ],
              image: "/images/general/print-ready.png"
            },
            {
              tag: "[04] Validate",
              title: "CMS Compliance",
              items: [
                "Proprietary validation checks regulatory requirements before export",
                "Missing fields or format issues trigger alerts",
                "Section 508 and ADA compliance built in",
                "Documentation proves validation before mailing"
              ],
              image: "/images/general/cms-comp.png"
            }
          ].map((feature, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
              {/* Left Content */}
              <div
                className="flex flex-col items-start"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="inline-flex items-center justify-center bg-[#F5F5F5] rounded-md px-3 py-1.5 mb-4">
                  <span className="text-primary text-[14px] font-bold tracking-wide">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-black text-4xl mb-6">
                  {feature.title}
                </h3>
                <hr className="w-[75%] border-gray-100 mb-8" />

                <ul className="flex flex-col gap-6">
                  {feature.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-textbody">
                      <svg className="w-5 h-5 text-[#00A1E0] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div
                className="relative w-full overflow-hidden rounded-2xl group cursor-pointer"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <Image
                  src={feature.image}
                  alt={`${feature.title} Interface`}
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
