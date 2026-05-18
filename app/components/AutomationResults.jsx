import Image from "next/image";

const RESULTS_DATA = [
  {
    type: "stat",
    value: "90%",
    title: "Time Reduction",
    desc: "Data to print-ready in days, not weeks",
  },
  {
    type: "icon",
    icon: "/images/general/zero-coordination.png",
    title: "Zero Coordination",
    desc: "No design agencies or formatting vendors",
  },
  {
    type: "icon",
    icon: "/images/general/complaince.png",
    title: "100% Compliance",
    desc: "Automated CMS validation",
  },
  {
    type: "icon",
    icon: "/images/general/lower-cost.png",
    title: "Lower Costs",
    desc: "Eliminate agency fees",
  },
];

export default function AutomationResults() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-[0%] bottom-[-15%] opacity-60 pointer-events-none select-none">
        <Image
          src="/images/general/transpernt-folder.png"
          alt=""
          width={500}
          height={500}
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="container w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left Side: Heading */}
          <div 
            className="lg:col-span-5 flex flex-col items-start text-white"
            data-aos="fade-right"
          >
            <h2 className="text-white mb-6 tracking-tight">
              Automation<br />
              Driven Results
            </h2>
            <p className="text-surface leading-relaxed">
              Faster timelines, lower costs, and compliance.
            </p>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
            {RESULTS_DATA.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-start transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1.5 h-full w-full cursor-default"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 h-10 flex items-center">
                  {item.type === "stat" ? (
                    <span className="text-accent text-5xl font-bold tracking-tight">
                      {item.value}
                    </span>
                  ) : (
                    <Image
                      src={item.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="object-contain"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="text-white mb-2">
                  {item.title}
                </h3>
                <p className="leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
