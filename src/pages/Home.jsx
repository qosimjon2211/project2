import React from "react";
import Logo from "../assets/bg.svg";
import "../index.css";
import arrow from "../assets/arrow.svg";

function Home() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 mt-2">
        <div
          className="rounded-bl-[100px] md:rounded-bl-[180px] h-[550px] md:h-[650px] bg-cover bg-center flex items-center px-8 md:px-16"
          style={{ backgroundImage: `url(${Logo})` }}
        >
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-serif text-[#292F36] font-bold leading-tight mb-4">
              Let Your Home <br />
              Be Unique
            </h1>
            <p className="text-[#4D5053] text-sm md:text-base mb-8">
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <button className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-7 py-4 rounded-[18px] flex items-center gap-3 text-sm font-medium cursor-pointer">
              <span>Get Started</span>
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

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-3">
              Project Plan
            </h3>
            <p className="text-[#4D5053] text-sm mb-6 max-w-[280px] mx-auto leading-relaxed">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#4D5053] font-semibold text-sm cursor-pointer hover:text-[#CDA274]">
              <span>Read More</span>
              <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
                <path
                  d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-3">
              Interior Work
            </h3>
            <p className="text-[#4D5053] text-sm mb-6 max-w-[280px] mx-auto leading-relaxed">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#4D5053] font-semibold text-sm cursor-pointer hover:text-[#CDA274]">
              <span>Read More</span>
              <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
                <path
                  d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-3">
              Realization
            </h3>
            <p className="text-[#4D5053] text-sm mb-6 max-w-[280px] mx-auto leading-relaxed">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#4D5053] font-semibold text-sm cursor-pointer hover:text-[#CDA274]">
              <span>Read More</span>
              <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
                <path
                  d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] leading-tight mb-6">
              We Create The Art <br />
              Of Stylish Living <br />
              Stylishly
            </h2>
            <p className="text-[#4D5053] text-base mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#F4F0EC] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-[#4D5053]">
                  012345678
                </div>
                <div className="text-sm text-[#4D5053]">Call Us Anytime</div>
              </div>
            </div>

            <button className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-7 py-4 rounded-[18px] flex items-center gap-3 text-sm font-medium cursor-pointer">
              <span>Get Free Estimate</span>
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

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              alt="Stylish kitchen"
              className="w-full max-w-[500px] h-[520px] object-cover rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[30px] rounded-br-[30px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 my-16">
        <div className="bg-[#F4F0EC] rounded-[50px] py-16 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-[#292F36] mb-12">
            What the People Thinks <br />
            About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  alt="Nattasha Mith"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#292F36]">
                    Nattasha Mith
                  </h4>
                  <p className="text-xs text-[#4D5053]">Sydney, USA</p>
                </div>
              </div>
              <p className="text-[#4D5053] text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                  alt="Raymond Galario"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#292F36]">
                    Raymond Galario
                  </h4>
                  <p className="text-xs text-[#4D5053]">Sydney, Australia</p>
                </div>
              </div>
              <p className="text-[#4D5053] text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been scrambled it to make a type book.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Benny Roll"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#292F36]">
                    Benny Roll
                  </h4>
                  <p className="text-xs text-[#4D5053]">Sydney, New York</p>
                </div>
              </div>
              <p className="text-[#4D5053] text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been scrambled.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-80">
          <div className="flex items-center gap-2 font-bold text-lg tracking-wide text-[#292F36]">
            <span>Modern Home</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#292F36] text-[#292F36] font-bold text-sm tracking-wider">
            VS
          </div>
          <div className="flex items-center gap-2 font-black text-xl text-[#292F36] tracking-widest">
            <span className="bg-[#292F36] text-white px-2 py-0.5 rounded text-sm font-bold">
              B
            </span>
            <span>BRAND</span>
          </div>
          <div className="italic font-serif text-2xl text-[#292F36]">
            Nature Home
          </div>
          <div className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#292F36] text-center leading-tight">
            CLASSIC
            <br />
            DESIGN STUDIO
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-3">
            Follow Our Projects
          </h2>
          <p className="text-[#4D5053] max-w-xl mx-auto text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
              alt="Modern Kitchan"
              className="w-full h-[450px] object-cover rounded-tr-[70px] mb-5"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#292F36]">
                  Modern Kitchan
                </h3>
                <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
              alt="Modern Kitchan"
              className="w-full h-[450px] object-cover rounded-tl-[70px] mb-5"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#292F36]">
                  Modern Kitchan
                </h3>
                <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
              alt="Modern Kitchan"
              className="w-full h-[450px] object-cover rounded-br-[70px] mb-5"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#292F36]">
                  Modern Kitchan
                </h3>
                <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Modern Kitchan"
              className="w-full h-[450px] object-cover rounded-bl-[70px] mb-5"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#292F36]">
                  Modern Kitchan
                </h3>
                <p className="text-sm text-[#4D5053]">Decor / Artchitecture</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F0EC] py-24 my-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="md:border-r md:border-[#CDA274] px-4">
            <h2 className="text-6xl md:text-7xl font-serif text-[#CDA274] mb-2 font-normal">
              12
            </h2>
            <p className="text-[#4D5053] text-sm md:text-base">
              Years Of Experiance
            </p>
          </div>
          <div className="md:border-r md:border-[#CDA274] px-4">
            <h2 className="text-6xl md:text-7xl font-serif text-[#CDA274] mb-2 font-normal">
              85
            </h2>
            <p className="text-[#4D5053] text-sm md:text-base">
              Success Project
            </p>
          </div>
          <div className="md:border-r md:border-[#CDA274] px-4">
            <h2 className="text-6xl md:text-7xl font-serif text-[#CDA274] mb-2 font-normal">
              15
            </h2>
            <p className="text-[#4D5053] text-sm md:text-base">
              Active Project
            </p>
          </div>
          <div className="px-4">
            <h2 className="text-6xl md:text-7xl font-serif text-[#CDA274] mb-2 font-normal">
              95
            </h2>
            <p className="text-[#4D5053] text-sm md:text-base">
              Happy CUstomers
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-3">
            Articles & News
          </h2>
          <p className="text-[#4D5053] max-w-xl mx-auto text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#E7E7E7] rounded-[30px] p-5 hover:bg-[#F4F0EC] transition cursor-pointer">
            <div className="relative rounded-[20px] overflow-hidden mb-4 h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                alt="Kitchen Design"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-white text-[#4D5053] text-xs px-3 py-1.5 rounded-lg shadow-sm font-medium">
                Kitchen Design
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#292F36] mb-8 leading-snug">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E7]/60">
              <span className="text-xs text-[#4D5053]">26 December,2022</span>
              <button className="w-10 h-10 rounded-full bg-[#F4F0EC] flex items-center justify-center text-[#292F36]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>

          <div className="border border-[#E7E7E7] rounded-[30px] p-5 bg-[#F4F0EC] transition cursor-pointer">
            <div className="relative rounded-[20px] overflow-hidden mb-4 h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                alt="Living Design"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-white text-[#4D5053] text-xs px-3 py-1.5 rounded-lg shadow-sm font-medium">
                Living Design
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#292F36] mb-8 leading-snug">
              Low Cost Latest Invented Interior Designing Ideas.
            </h3>
            <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E7]/60">
              <span className="text-xs text-[#4D5053]">22 December,2022</span>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#292F36]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>

          <div className="border border-[#E7E7E7] rounded-[30px] p-5 hover:bg-[#F4F0EC] transition cursor-pointer">
            <div className="relative rounded-[20px] overflow-hidden mb-4 h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-white text-[#4D5053] text-xs px-3 py-1.5 rounded-lg shadow-sm font-medium">
                Interior Design
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#292F36] mb-8 leading-snug">
              Best For Any Office & Business Interior Solution
            </h3>
            <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E7]/60">
              <span className="text-xs text-[#4D5053]">25 December,2022</span>
              <button className="w-10 h-10 rounded-full bg-[#F4F0EC] flex items-center justify-center text-[#292F36]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 10 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 text-[white] w-[800px] h-[224px] rounded-[70px]  bg-[#292F36]">
          <h3 className="text-[30px]">Wanna join the interno?</h3>
          <p className="text-[22px]">
            It is a long established fact will be distracted.
          </p>
          <button className="flex bg-[#CDA274] pl-[31px] pr-[31px] pt-[27px] pb-[27px] rounded-2xl gap-[5px]">
            Contact With Us
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
