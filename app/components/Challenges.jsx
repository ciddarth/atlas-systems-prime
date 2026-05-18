import Image from "next/image";

const CHALLENGES_LIST = [
  {
    icon: "/images/general/multi-system.png",
    title: "Multi-System Data Chasing",
    desc: "Pulling provider data from internal systems and reconciling inconsistencies before formatting.",
  },
  {
    icon: "/images/general/vendor.png",
    title: "Vendor Handoffs & Rework Delays",
    desc: "Coordinating design agencies and printers causes revisions and delays.",
  },
  {
    icon: "/images/general/last-stage.png",
    title: "Late-Stage Compliance Risk",
    desc: "CMS compliance checks occur late, making errors costly and extending production to 4-6 weeks.",
  },
];

export default function Challenges() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="container w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Side: Heading */}
        <div
          className="flex flex-col items-start text-white"
          data-aos="fade-right"
        >
          <h2 className="text-white tracking-tight">
            File Chasing,<br />
            Vendor Coordination, and<br />
            Six-Week Production Cycles
          </h2>
          <div className="w-48 h-2 bg-primary mt-6"></div>
        </div>

        {/* Right Side: List of challenges */}
        <div className="flex flex-col gap-10">
          {CHALLENGES_LIST.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-default"
              data-aos="fade-left"
              data-aos-delay={index * 150}
            >
              <div className="shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white">
                  {item.title}
                </h3>
                <p className="text-surface">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
