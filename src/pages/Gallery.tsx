import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const images = [
    { src: "/assets/gallery/gallery_01.jpg", category: "Loading", alt: "Warehouse loading operations" },
    { src: "/assets/gallery/gallery_02.jpg", category: "Packing", alt: "Quality packing process" },
    { src: "/assets/images/slider1.jpg", category: "Shipping", alt: "Container shipping" },
    { src: "/assets/images/slider2.jpg", category: "Shipping", alt: "Air freight operations" },
    { src: "/assets/images/slider3.jpg", category: "Warehousing", alt: "Modern warehouse facility" },
    { src: "/assets/images/slider4.jpg", category: "Packing", alt: "Fresh produce packing" },
    { src: "/assets/images/slider5.jpg", category: "Packing", alt: "Spices quality check" },
    { src: "/assets/products/fruits/fruits_apple.jpg", category: "Packing", alt: "Fruit packaging" },
  ];

  const categories = ["all", "Packing", "Loading", "Shipping", "Warehousing"];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our operations, facilities, and export quality products
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background sticky top-20 z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-primary to-secondary text-background"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative border border-border hover:border-primary/50 transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/slider1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
