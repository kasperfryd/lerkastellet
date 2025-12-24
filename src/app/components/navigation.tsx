import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-sm border-b border-neutral-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className='tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors'
          >
            LERKASTELLET
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <button
              onClick={() => scrollToSection("gallery")}
              className='text-neutral-600 hover:text-neutral-900 transition-colors'
            >
              Galleri
            </button>
            <button
              onClick={() => scrollToSection("info")}
              className='text-neutral-600 hover:text-neutral-900 transition-colors'
            >
              Om
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className='text-neutral-600 hover:text-neutral-900 transition-colors'
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-neutral-900 p-2'
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-neutral-100'>
          <div className='px-4 py-6 space-y-4'>
            <button
              onClick={() => scrollToSection("gallery")}
              className='block w-full text-left text-neutral-600 hover:text-neutral-900 transition-colors py-2'
            >
              Galleri
            </button>
            <button
              onClick={() => scrollToSection("info")}
              className='block w-full text-left text-neutral-600 hover:text-neutral-900 transition-colors py-2'
            >
              Om
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className='block w-full text-left text-neutral-600 hover:text-neutral-900 transition-colors py-2'
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
