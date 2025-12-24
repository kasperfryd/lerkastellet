import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./custom/ImageWithFallback";
import { X } from "lucide-react";
import { contentfulClient } from "../data/contentfulClient";
/* 
const ceramicPiecesOld = [
  {
    id: 1,
    title: "Artisan Bowl",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY2NTg0MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Hand-thrown stoneware bowl with natural glaze",
  },
  {
    id: 2,
    title: "Modern Vase",
    image:
      "https://images.unsplash.com/photo-1765277114329-b3da8e70731e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZSUyMG1vZGVybnxlbnwxfHx8fDE3NjY1Njc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sculptural ceramic vase with organic form",
  },
  {
    id: 3,
    title: "Handmade Pottery",
    image:
      "https://images.unsplash.com/photo-1629380321696-99d97eaa492a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc2NjU4NDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Traditional ceramic pottery with rustic finish",
  },
  {
    id: 4,
    title: "Ceramic Plate Set",
    image:
      "https://images.unsplash.com/photo-1541780941982-9c9fa3a304b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjB3aGl0ZXxlbnwxfHx8fDE3NjY1ODQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Minimalist white ceramic dinnerware",
  },
  {
    id: 5,
    title: "Handcrafted Cup",
    image:
      "https://images.unsplash.com/photo-1666949642643-ce9b2a766182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNlcmFtaWMlMjBjdXB8ZW58MXx8fHwxNzY2NDY4NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Unique ceramic cup with textured surface",
  },
  {
    id: 6,
    title: "Clay Collection",
    image:
      "https://images.unsplash.com/photo-1610206349499-c932c3b3aacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwY2VyYW1pY3N8ZW58MXx8fHwxNzY2NTg0MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Curated selection of artisan ceramics",
  },
]; */

export function Gallery() {
  type CeramicPiece = {
    id: string | number;
    title: string;
    image: string;
    description?: string;
  };

  const [ceramicPieces, setCeramicPieces] = useState<CeramicPiece[]>([]);

  useEffect(() => {
    let mounted = true;
    contentfulClient
      .getEntries()
      .then((response: any) => {
        console.log(response);
        const data: CeramicPiece[] = response.items.map((item: any) => {
          const imageField = item.fields?.image;
          const url =
            imageField && typeof imageField !== "string" && (imageField as any).fields?.file?.url
              ? "https:" + (imageField as any).fields.file.url
              : "";
          return {
            id: item.sys?.id,
            title: item.fields?.title || "",
            image: url,
            description: item.fields?.description || "",
          };
        });
        if (mounted) setCeramicPieces(data);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const [selectedPiece, setSelectedPiece] = useState<(typeof ceramicPieces)[0] | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(ceramicPieces.length / itemsPerPage));

  // If the data size changes and current page is out of range, reset to first page
  useEffect(() => {
    if (pageIndex >= totalPages) setPageIndex(0);
  }, [totalPages]);

  const start = pageIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const visiblePieces = ceramicPieces.slice(start, end);
  //const prevActiveElement = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <section id='gallery' className='py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12 md:mb-20'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4'>Min kollektion</h2>
            <p className='text-neutral-600 max-w-2xl mx-auto'>
              Udforsk mine håndlavede keramikstykker, hver enkelt unik og lavet med omhu
            </p>
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
            {visiblePieces.map((piece) => (
              <button
                key={piece.id}
                onClick={() => setSelectedPiece(piece)}
                className='group relative overflow-hidden bg-neutral-50 aspect-square hover:shadow-xl transition-shadow duration-300'
              >
                <ImageWithFallback
                  src={piece.image}
                  alt={piece.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <h3 className='mb-2'>{piece.title}</h3>
                    <p className='text-sm text-white/90'>{piece.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <button
              onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              disabled={pageIndex === 0}
              aria-label='Previous page'
              className={`px-3 py-2 rounded-md border ${
                pageIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-100"
              }`}
            >
              Prev
            </button>

            {/* Numbered page buttons */}
            <nav aria-label='Pagination' className='flex items-center gap-2'>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPageIndex(i)}
                  aria-current={i === pageIndex ? "page" : undefined}
                  aria-label={`Go to page ${i + 1}`}
                  className={`px-3 py-2 rounded-md border ${
                    i === pageIndex ? "bg-neutral-900 text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
              disabled={pageIndex >= totalPages - 1}
              aria-label='Next page'
              className={`px-3 py-2 rounded-md border ${
                pageIndex >= totalPages - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPiece && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label={`${selectedPiece.title} details`}
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
          onClick={() => setSelectedPiece(null)}
        >
          <div
            ref={(el) => {
              modalRef.current = el as HTMLDivElement | null;
              return;
            }}
            className='relative max-w-5xl w-full'
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              onClick={() => setSelectedPiece(null)}
              className='absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors p-2'
              aria-label='Close dialog'
            >
              <X size={32} />
            </button>
            <ImageWithFallback
              src={selectedPiece.image}
              alt={selectedPiece.title}
              className='w-full h-auto max-h-[80vh] object-contain'
            />
            <div className='text-center mt-6 text-white'>
              <h3 className='mb-2'>{selectedPiece.title}</h3>
              <p className='text-neutral-300'>{selectedPiece.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
