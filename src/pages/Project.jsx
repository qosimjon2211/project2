import React, { useState } from "react";

function Project() {
  const [activeTab, setActiveTab] = useState("Bed Room");
  const [currentPage, setCurrentPage] = useState("01");

  const tabs = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];

  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[300px] md:h-[356px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
          alt="Our Project Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 bg-white px-14 md:px-24 py-8 rounded-t-[37px] text-center shadow-sm">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-1">
            Our Project
          </h1>
          <p className="text-[#4D5053] text-sm">
            Home / Project
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-center mb-16">
          <div className="border border-[#CDA274] rounded-[18px] p-1 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-[15px] text-sm md:text-base font-semibold transition cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#CDA274] text-white"
                    : "text-[#292F36] hover:bg-[#F4F0EC]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          <div className="flex flex-col gap-16">
            <div>
              <div className="overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80"
                  alt="Minimal Bedroom table"
                  className="w-full h-[540px] md:h-[600px] object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-1">
                    Minimal Bedroom table
                  </h3>
                  <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer text-[#292F36]">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L9 9L1 17" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <div className="overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Medroom"
                  className="w-full h-[360px] md:h-[400px] object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-1">
                    Modern Medroom
                  </h3>
                  <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer text-[#292F36]">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L9 9L1 17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div>
              <div className="overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
                  alt="System Table"
                  className="w-full h-[360px] md:h-[400px] object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-1">
                    System Table
                  </h3>
                  <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer text-[#292F36]">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L9 9L1 17" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <div className="overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Bedroom"
                  className="w-full h-[540px] md:h-[600px] object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-1">
                    Modern Bedroom
                  </h3>
                  <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer text-[#292F36]">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L9 9L1 17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-center gap-3 mt-16 pb-12">
          {["01", "02", "03"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition cursor-pointer ${
                currentPage === page
                  ? "bg-[#F4F0EC] text-[#292F36]"
                  : "border border-[#CDA274] text-[#292F36] hover:bg-[#CDA274] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage("02")}
            className="w-12 h-12 rounded-full border border-[#CDA274] text-[#292F36] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer"
          >
            <svg width="8" height="14" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1L9 9L1 17" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Project;