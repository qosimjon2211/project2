import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/Logo2.svg";
import fakebok from "../assets/fakebok.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="w-full bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src={Logo2} alt="Logo" className="w-8 h-8" />
              <h2 className="text-3xl font-serif font-bold text-[#292F36]">
                Interno
              </h2>
            </div>
            <p className="text-[#4D5053] text-base leading-relaxed">
              It is a long established fact that a reader will be distracted lookings.
            </p>
            <div className="flex items-center gap-6 mt-2">
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

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-5">
              Pages
            </h3>
            <ul className="flex flex-col gap-4 text-[#4D5053] text-base">
              <li>
                <Link to="/about" className="hover:text-[#CDA274] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-[#CDA274] transition">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#CDA274] transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#CDA274] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/servise" className="hover:text-[#CDA274] transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-4 text-[#4D5053] text-base">
              <li className="hover:text-[#CDA274] cursor-pointer transition">
                Kitchan
              </li>
              <li className="hover:text-[#CDA274] cursor-pointer transition">
                Living Area
              </li>
              <li className="hover:text-[#CDA274] cursor-pointer transition">
                Bathroom
              </li>
              <li className="hover:text-[#CDA274] cursor-pointer transition">
                Dinning Hall
              </li>
              <li className="hover:text-[#CDA274] cursor-pointer transition">
                Bedroom
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#292F36] mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-6 text-[#4D5053] text-base leading-relaxed">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>

        </div>

        <div className="border-t border-[#E5E5E5] py-8 text-center text-[#4D5053] text-base">
          Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
        </div>

      </div>
    </footer>
  );
}

export default Footer;