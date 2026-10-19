import React, { useState } from "react";

function Blog() {
  const [currentPage, setCurrentPage] = useState("01");

  const articles = [
    {
      id: 1,
      tag: "Kitchen Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      tag: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      highlight: true,
    },
    {
      id: 3,
      tag: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      tag: "Kitchen Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      tag: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      tag: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[300px] md:h-[356px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80"
          alt="Articles & News Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 bg-white px-14 md:px-24 py-8 rounded-t-[37px] text-center shadow-sm">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-1">
            Articles & News
          </h1>
          <p className="text-[#4D5053] text-sm">
            Home / Blog
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-8">
          Latest Post
        </h2>

        <div className="border border-[#E7E7E7] rounded-[40px] md:rounded-[50px] p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-24">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Latest Post"
            className="w-full md:w-[500px] h-[300px] md:h-[380px] object-cover rounded-[30px] md:rounded-[40px]"
          />
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#292F36] mb-4 leading-snug">
              Low Cost Latest Invented Interior Designing Ideas
            </h3>
            <p className="text-[#4D5053] text-sm md:text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p className="text-[#4D5053] text-sm md:text-base leading-relaxed mb-8">
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#4D5053]">26 December,2022</span>
              <button className="w-12 h-12 rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] hover:text-white transition flex items-center justify-center cursor-pointer text-[#292F36]">
                <svg width="8" height="14" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1L9 9L1 17" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#292F36] mb-8">
          Articles & News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className={`border border-[#E7E7E7] rounded-[30px] p-5 transition cursor-pointer hover:bg-[#F4F0EC] ${
                item.highlight ? "bg-[#F4F0EC]" : "bg-white"
              }`}
            >
              <div className="relative rounded-[20px] overflow-hidden mb-4 h-[240px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-white text-[#4D5053] text-xs px-3 py-1.5 rounded-lg shadow-sm font-medium">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#292F36] mb-8 leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E7]/60">
                <span className="text-xs text-[#4D5053]">{item.date}</span>
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[#292F36] transition ${
                    item.highlight ? "bg-white" : "bg-[#F4F0EC]"
                  }`}
                >
                  <svg width="8" height="14" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L9 9L1 17" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
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

export default Blog;