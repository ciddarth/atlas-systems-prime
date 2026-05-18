import Image from "next/image";

const DELIVERY_OPTIONS = [
  {
    icon: "/images/general/print.png",
    title: "Print-Ready Files",
    desc: "PDFs to your existing print vendor",
  },
  {
    icon: "/images/general/files-spec.png",
    title: "File Specs",
    desc: "Embedded fonts, CMYK, bleeds, crop marks included",
  },
  {
    icon: "/images/general/format.png",
    title: "Format Options",
    desc: "Single file or split by region/product",
  },
  {
    icon: "/images/general/qa.png",
    title: "QA Preview",
    desc: "Internal review before finalizing",
  },
];

export default function FlexibleDelivery() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container w-full mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2
          className="text-black text-center mb-12 tracking-tight"
          data-aos="fade-up"
        >
          Flexible Delivery
        </h2>

        {/* Options Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {DELIVERY_OPTIONS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start px-0 xl:px-10 group transition-all duration-300 hover:-translate-y-1 cursor-default ${index !== DELIVERY_OPTIONS.length - 1 ? 'lg:border-r border-gray-100' : ''
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="transition-transform duration-300 group-hover:scale-110 mb-6">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-black mb-3">
                {item.title}
              </h3>
              <p className="text-textbody leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
