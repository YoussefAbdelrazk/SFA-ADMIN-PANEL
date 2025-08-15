import {
  Bell,
  CreditCard,
  FileText,
  HelpCircle,
  Info,
  LayoutDashboard,
  Settings,
  UserCheck,
  Users,
  Video,
} from 'lucide-react';

export const navigationItems = [
  { name: 'الرئسيه', icon: LayoutDashboard, href: '/', active: true },
  { name: 'العملاء', icon: Users, href: '/clients' },
  { name: 'ارسال اشعار', icon: Bell, href: '/notifications' },
  { name: 'المدربين', icon: UserCheck, href: '/trainers' },
  { name: 'الفيديوهات', icon: Video, href: '/videos' },
  { name: 'البرامج', icon: FileText, href: '/programs' },
  { name: 'وحده التحكم', icon: Settings, href: '/settings' },
  { name: 'الاشتراكات', icon: CreditCard, href: '/subscriptions' },
  { name: 'إدارة FAQ', icon: HelpCircle, href: '/faq' },
  { name: 'إدارة من نحن', icon: Info, href: '/about' },
];
