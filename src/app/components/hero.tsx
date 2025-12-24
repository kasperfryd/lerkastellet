import { ImageWithFallback } from "./figma/ImageWithFallback";
import coverImage from "../../assets/Collage_result_small.webp";
import coverImageLarge from "../../assets/Collage_wide_result_large.webp";
import logo from "../../assets/icons/Lerkastellet-2.png";

export function Hero() {
  return (
    <section
      id='hero'
      className='relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-50'
    >
      {/* Background Image */}
      <div className='absolute inset-3'>
        <ImageWithFallback
          srcSet={`${coverImage} 600w, ${coverImageLarge} 1200w`}
          sizes='(width <= 600px) 600px,
                   1200px'
          src={coverImageLarge}
          alt='lerkastellet image large'
          className='w-full h-full object-cover opacity-60'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 w-full mx-auto md-auto bg-white/20 py-8 rounded-md'>
        <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-neutral-800 mb-6 tracking-tight'>
          Keramik med sjæl
        </h1>
        <p className='text-neutral-800 max-w-2xl mx-auto mb-8 text-base sm:text-lg md:text-xl'>
          Lerkastellet skaber unikke, håndlavede keramikstykker.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById("gallery");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className='inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors'
        >
          Se kollektionen
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-neutral-400 rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-2 bg-neutral-400 rounded-full'></div>
        </div>
      </div>
    </section>
  );
}
