import { useEffect, useState } from "react";
import { IPropsSlides } from "./IPropsSlides";
import { MdNavigateNext } from "react-icons/md";

export default function CarouselInstagram({
  slides,
  autoSlide = false,
  delay = 3000,
}: IPropsSlides) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  };

  const next = () => {
    setCurr(curr === slides.length - 1 ? 0 : curr + 1);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurr(curr === slides.length - 1 ? 0 : curr + 1);
      }, delay);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <div className="overflow-hidden w-[270px] relative">
        <div
          className="flex"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide: string, index) => (
            <img
              key={index}
              className="w-[270px] h-full object-cover"
              src={slide}
              alt="instagram"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 opacity-40 text-gray-400 hover:bg-white"
          >
            <MdNavigateNext className="rotate-180" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 opacity-40 text-gray-400 hover:bg-white"
          >
            <MdNavigateNext />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`transition-all w-3 h-3 bg-white opacity-40 rounded-full ${
                  curr === index ? "p-2.5" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}