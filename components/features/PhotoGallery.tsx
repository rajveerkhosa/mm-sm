import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=900&q=85&fit=crop",
    alt: "Open highway through California valley",
    label: "I-5 & Lerdo Hwy",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80&fit=crop",
    alt: "Fuel pumps",
    label: "Fuel Station",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80&fit=crop",
    alt: "Coffee counter",
    label: "Coffee & Drinks",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&q=80&fit=crop",
    alt: "Diner food",
    label: "Hot Meals",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop",
    alt: "Trucks on the road",
    label: "Truck Parking",
    span: "lg:col-span-2",
  },
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="bg-midnight-50 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">Gallery</p>
          <h2 className="text-white">See the Plaza</h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3 h-auto lg:h-[640px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${photo.span} ${i === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span className="text-white/70 text-xs font-medium uppercase tracking-widest">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
