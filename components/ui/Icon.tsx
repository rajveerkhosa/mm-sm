import {
  Clock,
  Fuel,
  Wifi,
  Truck,
  ShowerHead,
  Scale,
  Shirt,
  Banknote,
  Utensils,
  DoorOpen,
  Droplet,
  Camera,
  Phone,
  MapPin,
  Navigation,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  fuel: Fuel,
  wifi: Wifi,
  truck: Truck,
  shower: ShowerHead,
  scale: Scale,
  washer: Shirt,
  banknote: Banknote,
  utensils: Utensils,
  "door-open": DoorOpen,
  droplet: Droplet,
  camera: Camera,
  phone: Phone,
  "map-pin": MapPin,
  navigation: Navigation,
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name] || Clock;
  return <IconComponent className={className} size={size} />;
}
