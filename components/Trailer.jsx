'use client'
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";



function Trailer({ contents }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-3xl mx-auto p-4 h-96 border-2">
      {/* <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <Image src={slides[current].src} alt={slides[current].title} className="w-full object-cover" />
        <button className="absolute inset-0 flex items-center justify-center text-white text-6xl">
          <FaPlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
        </button>
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <FaChevronRight />
        </button>
      </div> */}

      <div className="flex mt-4 gap-2 justify-center">
        {contents.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={` rounded border-2 overflow-hidden ${index === current ? "border-red-500" : "border-transparent"}`}
          >
            <Image src={slide?.thumbnail_url} alt={slide.name} className="object-cover" height={400} width={500} />
          </button>
        ))}
      </div>
    </div>
  );
}




export default Trailer