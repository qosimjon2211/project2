import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex items-center bg-white overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        
        <div className="flex flex-col justify-center items-start pl-6 sm:pl-12 md:pl-16 lg:pl-28 xl:pl-40 pr-6 py-12 md:py-20">
          <h1 className="text-8xl md:text-[180px] lg:text-[230px] font-serif font-bold text-[#CDA274] leading-none mb-2 md:mb-4 select-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#292F36] mb-8 leading-snug max-w-md">
            We are sorry, but the page you requested was not found
          </h2>
          <Link
            to="/"
            className="bg-[#292F36] hover:bg-[#CDA274] transition text-white px-8 py-5 rounded-[18px] inline-flex items-center gap-3 text-sm font-semibold cursor-pointer shadow-md"
          >
            <span>Back To Home</span>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path
                d="M1 8H15M15 8L9.5 2.5M15 8L9.5 13.5"
                stroke="#CDA274"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="w-full h-full flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
            alt="404 Not Found"
            className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover rounded-bl-[120px] md:rounded-bl-[250px] shadow-sm"
          />
        </div>

      </div>
    </div>
  );
}

export default NotFound;