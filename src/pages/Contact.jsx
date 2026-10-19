import React from "react";
import fakebok from "../assets/fakebok.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import instagram from "../assets/instagram.svg";

function Contact() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[300px] md:h-[356px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 bg-white px-14 md:px-24 py-8 rounded-t-[37px] text-center shadow-sm">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-1">
            Contact Us
          </h1>
          <p className="text-[#4D5053] text-sm">
            Home / Contact
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#292F36] text-center max-w-2xl mx-auto mb-16 leading-tight">
          We love meeting new people and helping them.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
          <div className="bg-[#F4F0EC] rounded-[30px] p-8 md:p-10 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-[#4D5053] text-sm md:text-base break-all">
                info@yourdomain.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-[#4D5053] text-sm md:text-base">
                +1 (378) 400-1234
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="text-[#4D5053] text-sm md:text-base">
                www.yourdomain.com
              </span>
            </div>

            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#E5E5E5]/60">
              <a href="#" className="hover:opacity-75 transition">
                <img src={fakebok} alt="Facebook" className="h-4" />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <img src={logo3} alt="Twitter" className="h-4" />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <img src={logo4} alt="LinkedIn" className="h-4" />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <img src={instagram} alt="Instagram" className="h-4" />
              </a>
            </div>
          </div>

          <form className="md:col-span-2 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-[#292F36] pb-3 text-sm md:text-base focus:outline-none focus:border-[#CDA274] placeholder-[#4D5053] bg-transparent transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-[#292F36] pb-3 text-sm md:text-base focus:outline-none focus:border-[#CDA274] placeholder-[#4D5053] bg-transparent transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-[#292F36] pb-3 text-sm md:text-base focus:outline-none focus:border-[#CDA274] placeholder-[#4D5053] bg-transparent transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border-b border-[#292F36] pb-3 text-sm md:text-base focus:outline-none focus:border-[#CDA274] placeholder-[#4D5053] bg-transparent transition"
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Hello I am Intrested in.."
                className="border-b border-[#292F36] pb-3 text-sm md:text-base focus:outline-none focus:border-[#CDA274] placeholder-[#4D5053] bg-transparent w-full resize-none transition"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-8 py-5 rounded-[18px] flex items-center gap-3 text-sm font-semibold cursor-pointer shadow-md"
              >
                <span>Send Now</span>
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
          </form>
        </div>

        <div className="relative w-full h-[350px] md:h-[450px] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-sm">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373099955!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0xb1a87b66db07400d!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
            className="w-full h-full border-0 grayscale invert contrast-125"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-10 h-10 bg-[#CDA274] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;