import Image from "next/image";

const DOC_ITEMS = [
  {
    bold: "Validation logs",
    text: " with regulatory requirement pass/fail status",
  },
  {
    bold: "Section 508",
    text: " compliance proof for accessibility",
  },
  {
    bold: "Data version",
    text: " and validation timestamp records",
  },
  {
    bold: "Historical archives",
    text: " with generation and distribution dates",
  },
];

export default function CompleteDocumentation() {
  return (
    <section className="bg-white px-6">
      <div className="container w-full mx-auto">
        <div className="bg-surface rounded-4xl flex flex-col lg:flex-row gap-16 items-center pt-24">

          {/* Left Side */}
          <div
            className="flex-1 flex flex-col w-full md:pl-24 p-6 md:p-0"
            data-aos="fade-right"
          >
            <h2 className="text-primary tracking-tight mb-6">
              Complete Documentation
            </h2>
            <hr className="w-[85%] border-0 h-[1px] bg-gradient-to-r from-gray-200 to-transparent mb-2" />

            <div className="flex flex-col">
              {DOC_ITEMS.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4 py-5">
                    <div className="mt-1 shrink-0 flex items-center justify-center">
                      <Image
                        src="/images/general/checklist.png"
                        alt="Check"
                        width={22}
                        height={22}
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-black leading-relaxed m-0">
                      <span className="font-bold">{item.bold}</span>
                      {item.text}
                    </p>
                  </div>
                  {index !== DOC_ITEMS.length - 1 && (
                    <hr className="w-[85%] border-0 h-[1px] bg-gradient-to-r from-gray-200 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div 
            className="flex-1 w-full relative"
            data-aos="fade-left"
          >
            <div className="shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)] bg-white p-4 md:p-6 rounded-tl-[32px]">
              <h3 className="text-black ml-2 md:ml-5 mb-6 tracking-tight text-xl md:text-2xl">End-to-end documentation</h3>

              <div className="rounded-xl border border-gray-100 p-4 md:p-6 lg:p-8">
                <div className="relative">
                  {/* Main vertical line */}
                  <div className="absolute left-[7px] top-2 bottom-4 w-[2px] bg-gray-100 z-0"></div>

                  {/* Dec 18 Block */}
                  <div className="relative mb-8">
                    <div className="absolute left-[7px] top-[6px] w-[14px] h-[14px] bg-white border-[2px] border-gray-300 rounded-full -translate-x-1/2 z-10"></div>
                    <div className="pl-6 md:pl-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="font-bold text-gray-700 text-[14px]">Dec 18, 2025</span>
                        <span className="text-gray-400 text-[12px] font-medium">(2 Changes)</span>
                      </div>
                      <hr className="w-full border-gray-100 mb-6" />

                      {/* Sub-item 1 */}
                      <div className="relative mb-8 group/item hover:translate-x-1.5 transition-transform duration-300 cursor-default">
                        <div className="absolute left-[-25px] top-[10px] w-[25px] h-[2px] bg-gray-100 z-0"></div>
                        <div className="absolute left-0 top-[6px] w-[10px] h-[10px] bg-white border-[2px] border-[#00A1E0] rounded-full group-hover/item:border-[#00A1E0] -translate-x-1/2 z-10 transition-colors duration-300"></div>
                        <div className="pl-4 md:pl-6">
                          <div className="text-gray-500 text-[11px] font-semibold mb-2">05:37 PM</div>
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 sm:gap-4">
                            <div className="border-l-[3px] border-[#00A1E0] pl-4">
                              <div className="font-semibold text-gray-700 text-[13px] mb-1 group-hover/item:text-[#00A1E0] transition-colors">Email Address</div>
                              <div className="text-gray-500 text-[12px] mb-0.5">Previous Value: sample@health.com</div>
                              <div className="text-gray-500 text-[12px] break-all">Current Value: alexStamp@health.com</div>
                            </div>
                            <div className="text-[11px] text-gray-500 mt-1 pl-4 sm:pl-0 sm:text-right">
                              Changed By: <span className="text-gray-800 font-semibold">William</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sub-item 2 */}
                      <div className="relative group/item hover:translate-x-1.5 transition-transform duration-300 cursor-default">
                        <div className="absolute left-[-25px] top-[10px] w-[25px] h-[2px] bg-gray-100 z-0"></div>
                        <div className="absolute left-0 top-[6px] w-[10px] h-[10px] bg-white border-[2px] border-[#34A853] rounded-full group-hover/item:border-[#34A853] -translate-x-1/2 z-10 transition-colors duration-300"></div>
                        <div className="pl-4 md:pl-6">
                          <div className="text-gray-500 text-[11px] font-semibold mb-2">02:00 PM</div>
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 sm:gap-4">
                            <div className="border-l-[3px] border-[#34A853] pl-4">
                              <div className="font-semibold text-gray-700 text-[13px] mb-1 group-hover/item:text-[#34A853] transition-colors">Degree</div>
                              <div className="text-gray-500 text-[12px] mb-0.5">Previous Value: MD</div>
                              <div className="text-gray-500 text-[12px]">Current Value: MS</div>
                            </div>
                            <div className="text-[11px] text-gray-500 mt-1 pl-4 sm:pl-0 sm:text-right">
                              Added By: <span className="text-gray-800 font-semibold">William</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dec 10 Block */}
                  <div className="relative">
                    <div className="absolute left-[7px] top-[6px] w-[14px] h-[14px] bg-white border-[2px] border-gray-300 rounded-full -translate-x-1/2 z-10"></div>
                    <div className="pl-6 md:pl-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="font-bold text-gray-700 text-[14px]">Dec 10, 2025</span>
                        <span className="text-gray-400 text-[12px] font-medium">(1 Changes)</span>
                      </div>
                      <hr className="w-full border-gray-100 mb-6" />

                      {/* Sub-item 1 */}
                      <div className="relative group/item hover:translate-x-1.5 transition-transform duration-300 cursor-default">
                        <div className="absolute left-[-25px] top-[10px] w-[25px] h-[2px] bg-gray-100 z-0"></div>
                        <div className="absolute left-0 top-[6px] w-[10px] h-[10px] bg-white border-[2px] border-primary rounded-full group-hover/item:border-primary -translate-x-1/2 z-10 transition-colors duration-300"></div>
                        <div className="pl-4 md:pl-6">
                          <div className="text-gray-500 text-[11px] font-semibold mb-2">04:20 PM</div>
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 sm:gap-4">
                            <div className="border-l-[3px] border-primary pl-4">
                              <div className="font-semibold text-gray-700 text-[13px] mb-1 group-hover/item:text-primary transition-colors">Fax</div>
                              <div className="text-gray-500 text-[12px] mb-0.5">Previous Value: +1 (456)-902-1234</div>
                              <div className="text-gray-500 text-[12px]">Current Value: +1 (456)-902-3421</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
