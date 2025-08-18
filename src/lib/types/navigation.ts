import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
  children?: NavigationItem[];
}
