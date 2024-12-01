import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
  category: string;
}

const ImageCard = ({ image, onClick }: { image: GalleryImage; onClick: (src: string) => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imageRef.current!);
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={imageRef}
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={() => onClick(image.src)}
    >
      {isInView && (
        <>
          <div className={`aspect-[4/3] transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
          </div>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p className="text-sm opacity-90">{image.date}</p>
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-white/20 rounded-full">
                {image.category}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extended gallery items with more images and categories
  const galleryItems: GalleryImage[] = [
    {
      id: 1,
      src: '/images/cricket-stadium.jpg',
      title: 'Team Victory Celebration',
      date: 'March 2024',
      category: 'Celebrations'
    },
    {
      id: 2,
      src: '/images/hero-cricket.jpg',
      title: 'Championship Final Match',
      date: 'February 2024',
      category: 'Matches'
    },
    {
      id: 3,
      src: '/images/cricket-stadium.jpg',
      title: 'Training Session',
      date: 'January 2024',
      category: 'Training'
    },
    {
      id: 4,
      src: '/images/hero-cricket.jpg',
      title: 'Youth Development Program',
      date: 'December 2023',
      category: 'Youth'
    },
    {
      id: 5,
      src: '/images/cricket-stadium.jpg',
      title: 'Awards Night',
      date: 'November 2023',
      category: 'Celebrations'
    },
    {
      id: 6,
      src: '/images/hero-cricket.jpg',
      title: 'Community Cricket Day',
      date: 'October 2023',
      category: 'Community'
    },
    {
      id: 7,
      src: '/images/cricket-stadium.jpg',
      title: 'Team Building Workshop',
      date: 'September 2023',
      category: 'Training'
    },
    {
      id: 8,
      src: '/images/hero-cricket.jpg',
      title: 'Season Opening Ceremony',
      date: 'August 2023',
      category: 'Celebrations'
    },
    {
      id: 9,
      src: '/images/cricket-stadium.jpg',
      title: 'Charity Match',
      date: 'July 2023',
      category: 'Community'
    },
    {
      id: 10,
      src: '/images/hero-cricket.jpg',
      title: 'Junior Championship',
      date: 'June 2023',
      category: 'Youth'
    },
    {
      id: 11,
      src: '/images/cricket-stadium.jpg',
      title: 'Senior Team Practice',
      date: 'May 2023',
      category: 'Training'
    },
    {
      id: 12,
      src: '/images/hero-cricket.jpg',
      title: 'League Match Final',
      date: 'April 2023',
      category: 'Matches'
    }
  ];

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredImages = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Capturing moments of triumph, dedication, and team spirit at Eagles Cricket Club.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            onClick={openModal}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;