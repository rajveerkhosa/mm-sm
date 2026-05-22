import { Fuel, Truck, Bath, UtensilsCrossed, Clock, Droplets, Flame } from "lucide-react";

const items = [
  { Icon: Clock, text: "Open 24/7" },
  { Icon: Fuel, text: "High-Flow Diesel" },
  { Icon: Truck, text: "20+ Truck Spaces" },
  { Icon: Flame, text: "Tandoori Nights Indian" },
  { Icon: UtensilsCrossed, text: "Chester's Chicken" },
  { Icon: Bath, text: "Showers Coming Soon" },
  { Icon: Droplets, text: "DEF at Pump" },
  { Icon: Clock, text: "Open 24/7" },
  { Icon: Fuel, text: "High-Flow Diesel" },
  { Icon: Truck, text: "20+ Truck Spaces" },
  { Icon: Flame, text: "Tandoori Nights Indian" },
  { Icon: UtensilsCrossed, text: "Chester's Chicken" },
  { Icon: Bath, text: "Showers Coming Soon" },
  { Icon: Droplets, text: "DEF at Pump" },
];

export function QuickInfo() {
  return (
    <div className="bg-midnight-100 border-y border-white/[0.06] overflow-hidden py-3.5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => {
          const { Icon } = item;
          return (
            <div key={i} className="inline-flex items-center gap-2.5 px-7">
              <Icon size={13} className="text-sinclair-green flex-shrink-0" />
              <span className="text-white/50 text-xs font-medium uppercase tracking-[0.18em]">
                {item.text}
              </span>
              <span className="text-white/45 ml-4">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
