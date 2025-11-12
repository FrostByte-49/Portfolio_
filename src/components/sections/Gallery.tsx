import { useState } from 'react';
import { X, Maximize2, Sparkles } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://res.cloudinary.com/dhn92qb61/image/upload/v1762957983/Screenshot_2025-11-12_191534_czdjry.png',
    title: 'GitHub Profile',
    category: 'Code',
  },

  {
    url: 'https://res.cloudinary.com/dhn92qb61/image/upload/v1762957954/Screenshot_2025-11-12_190232_pu8eb3.png',
    title: 'LinkedIn Profile',
    category: 'Network',
  },

  {
    url: 'https://res.cloudinary.com/dhn92qb61/image/upload/v1762957982/Screenshot_2025-11-12_191415_fw1eo7.png',
    title: 'Project Analytics',
    category: 'Project',
  },

  {
    url: 'https://res.cloudinary.com/dhn92qb61/image/upload/v1762957921/cover1_xqzedh.png',
    title: 'My Portfolio',
    category: 'Design',
  },

  {
    url: 'https://res.cloudinary.com/dhn92qb61/image/upload/v1762957912/20251112_193613_hlcpzm.jpg',
    title: 'Coding Workspace',
    category: 'Tech',
  },


];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center px-6 py-20 transition-colors duration-500
                 bg-gradient-to-br from-pink-100 via-white to-purple-100 
                 dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
    >
      
      {/* Header */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              ギャラリー • Visual Journey
            </span>
          </div>
          
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              Gallery
          </h2>

          {/* Line Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-gray-400 cursor-pointer animate-slide-up hover:border-pink-500 transition-colors duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-semibold text-lg">{image.title}</p>
                <span className="text-white/80 text-sm">{image.category}</span>
              </div>

              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative max-w-5xl w-full animate-scale-in">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[100vh] rounded-3xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Footer Text */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full border border-pink-200/50 dark:border-purple-700/50">
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 capitalize">
              Each frame captures a story of innovation & creative brilliance
            </p>
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}
