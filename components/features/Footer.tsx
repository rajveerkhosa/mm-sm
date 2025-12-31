import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white py-16 px-4 md:px-6 border-t-4 border-sinclair-green">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 gradient-sinclair rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">L</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-gray-500">
              Also known as {siteConfig.alternativeName}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Icon name="map-pin" size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="phone" size={20} />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-sinclair-green transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="clock" size={20} />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-bold mb-4">Hours of Operation</h4>
            <div className="space-y-2 text-gray-300 mb-6">
              {siteConfig.hoursDetailed.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span className="font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Social Media - only show if links are provided */}
            {(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.twitter) && (
              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {siteConfig.social.facebook && (
                    <a href={siteConfig.social.facebook} className="hover:text-sinclair-green transition-colors">
                      <Icon name="facebook" size={24} />
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a href={siteConfig.social.instagram} className="hover:text-sinclair-green transition-colors">
                      <Icon name="instagram" size={24} />
                    </a>
                  )}
                  {siteConfig.social.twitter && (
                    <a href={siteConfig.social.twitter} className="hover:text-sinclair-green transition-colors">
                      <Icon name="twitter" size={24} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
