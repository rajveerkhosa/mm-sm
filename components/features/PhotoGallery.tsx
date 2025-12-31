import { Section } from "@/components/ui/Section";

export function PhotoGallery() {
  // Placeholder images - replace with actual photos later
  const photos = [
    { id: 1, alt: "Fuel pumps" },
    { id: 2, alt: "Parking area" },
    { id: 3, alt: "Store front" },
    { id: 4, alt: "Shower facilities" },
    { id: 5, alt: "Food service" },
    { id: 6, alt: "Parking at night" },
  ];

  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="mb-4">Photo Gallery</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Take a look around our facility
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-video bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            {/* Placeholder - replace with actual images */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold">
              {photo.alt}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Images coming soon. Visit us to see our facility in person!
        </p>
      </div>
    </Section>
  );
}
