import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full overflow-y-hidden mx-auto">
        <span onClick={nextSlide} className='absolute top-1/2 right-2 z-50 w-16 h-16 rounded-full p-2 bg-slate-500 hover:opacity-35 opacity-15'><ChevronRightIcon/></span>
        <span onClick={prevSlide} className='absolute top-1/2 left-2 z-50 w-16 h-16 rounded-full p-2 bg-slate-500 hover:opacity-35 opacity-15'><ChevronLeftIcon/></span>
      <div className="overflow-hidden w-full h-full">
        <div
          className="w-full h-full flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>
      </div>
      {/* <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">
        Next
      </button> */}
    </div>
  );
};

export default CarouselComponent;