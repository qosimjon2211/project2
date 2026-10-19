import React from "react";
import Banner from "../assets/aboutimage/Banner.svg";
import Photo from "../assets/aboutimage/Photo.svg";
import Image30 from "../assets/aboutimage/Image (30).svg";

function About() {
  return (
    <div className="w-full bg-white">
      {/* 1. Banner qismi */}
      <div className="w-full flex items-center justify-center">
        <img
          src={Banner}
          alt="About Us Banner"
          className="w-full h-auto object-cover max-h-[360px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* 2. Iqtibos (Quote) qismi */}
        <div className="relative max-w-3xl mx-auto px-10 md:px-20 py-16 md:py-24 my-16 md:my-24 flex flex-col items-center justify-center text-center">
          {/* Chap qavs ramkasi */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 border-l-[24px] md:border-l-[30px] border-t-[24px] md:border-t-[30px] border-b-[24px] md:border-b-[30px] border-[#F4F0EC] rounded-l-[40px] md:rounded-l-[50px] pointer-events-none"></div>
          {/* O'ng qavs ramkasi */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 border-r-[24px] md:border-r-[30px] border-t-[24px] md:border-t-[30px] border-b-[24px] md:border-b-[30px] border-[#F4F0EC] rounded-r-[40px] md:rounded-r-[50px] pointer-events-none"></div>

          {/* Qo'shtirnoq belgisi */}
          <span className="text-5xl md:text-6xl font-serif text-[#292F36] leading-none mb-6">
            “
          </span>

          {/* Iqtibos matni */}
          <blockquote className="text-xl md:text-3xl font-serif italic text-[#292F36] leading-relaxed font-normal">
            I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
          </blockquote>

          {/* Muallif */}
          <p className="mt-8 text-xs md:text-sm tracking-[0.25em] uppercase text-[#4D5053] font-medium">
            -BUNNY WILLIAMS
          </p>
        </div>

        {/* 3. What We Do qismi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 md:my-24">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-6">
              What We Do
            </h2>
            <p className="text-[#4D5053] text-base leading-relaxed mb-10">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-8 py-5 rounded-[18px] flex items-center gap-3 text-sm font-semibold cursor-pointer shadow-md">
              <span>Our Concept</span>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path
                  d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={Photo}
              alt="What We Do"
              className="w-full max-w-[550px] h-[340px] md:h-[380px] object-cover rounded-[50px] shadow-sm"
            />
          </div>
        </div>

        {/* 4. The End Result qismi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 md:my-24 pb-16">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img
              src={Image30}
              alt="The End Result"
              className="w-full max-w-[550px] h-[340px] md:h-[380px] object-cover rounded-[50px] shadow-sm"
            />
          </div>

          <div className="max-w-md order-1 md:order-2 md:pl-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-6">
              The End Result
            </h2>
            <p className="text-[#4D5053] text-base leading-relaxed mb-10">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-8 py-5 rounded-[18px] flex items-center gap-3 text-sm font-semibold cursor-pointer shadow-md">
              <span>Our Portfolio</span>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path
                  d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;