import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Creative Design',
    category: 'Design',
  },
  {
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Code & Coffee',
    category: 'Workspace',
  },
  {
    url: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Tech Setup',
    category: 'Tech',
  },
  {
    url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Team Collaboration',
    category: 'Work',
  },
  {
    url: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Innovation',
    category: 'Tech',
  },
  {
    url: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Creative Process',
    category: 'Design',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Moments from my creative journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer animate-slide-up"
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
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-sm font-medium">
                  {galleryImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
