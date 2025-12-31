import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function QuickInfo() {
  const info = [
    {
      icon: "map-pin",
      label: "Address",
      value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
    },
    {
      icon: "clock",
      label: "Hours",
      value: siteConfig.hours,
    },
    {
      icon: "fuel",
      label: "Fuel",
      value: "Diesel, Unleaded & DEF",
    },
    {
      icon: "truck",
      label: "Truck Parking",
      value: siteConfig.parking.capacity,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-sand -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {info.map((item, index) => (
            <Card key={index} className="text-center bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 gradient-sinclair rounded-2xl shadow-sinclair">
                  <Icon name={item.icon} className="text-white" size={36} />
                </div>
                <div>
                  <p className="text-xs font-bold text-sinclair-green uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="font-bold text-lg md:text-xl text-navy leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
