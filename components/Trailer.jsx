'use client'
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Trailer({ contents }) {
  const images = contents.map((item) =>
    item.thumbnail_url || (item.resource_type === "image" ? item.resource_value : null)
  )
  const [image, setImage] = useState(0);
  const prev = () => {
    setImage((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }
  const next = () => {
    setImage((prev) => (prev + 1) % images.length)

  }
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white">
      <div className="rounded-md relative w-full">
        <Image src={images[image]} height={300} width={300} alt="main pic" className="h-80 md:h-50 w-full rounded-md" />
        <div className="absolute flex justify-between top-1/2 w-full -translate-y-1/2 z-10 px-2">
          <button onClick={prev} className="text-black font-extrabold text-xl rounded-full bg-white p-1"><IoIosArrowBack /></button>
          <button onClick={next} className="text-black font-extrabold text-xl rounded-full bg-white p-1"><IoIosArrowForward /></button>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {images.map((item, id) => {
          return (
            <div key={id} className={`mb-4 ${image === id ? 'border-2 border-red-400' : ''}`}>
              <img onClick={() => setImage(id)} src={item} alt={item.name} className="w-full max-w-md h-6" />

            </div>
          );
        })}
      </div>
    </div>
  );
}




export default Trailer