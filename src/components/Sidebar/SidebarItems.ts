import { NavigationItem } from '@/lib/types/navigation';
import {
  Bell,
  Clock,
  CreditCard,
  FileText,
  HelpCircle,
  Info,
  LayoutDashboard,
  List,
  Plus,
  Settings,
  UserCheck,
  Users,
  Video,
} from 'lucide-react';

export const navigationItems: NavigationItem[] = [
  { name: 'الرئسيه', icon: LayoutDashboard, href: '/', active: true },
  { name: 'العملاء', icon: Users, href: '/clients' },
  { name: 'ارسال اشعار', icon: Bell, href: '/notifications' },
  { name: 'المدربين', icon: UserCheck, href: '/trainers' },
  {
    name: 'الفيديوهات',
    icon: Video,
    href: '/videos',
    children: [
      { name: 'إضافة فيديو جديد', icon: Plus, href: '/videos/add' },
      { name: ' الطلبات المعلقة', icon: Clock, href: '/videos/pending' },
      { name: ' لائحة الفيديوهات', icon: List, href: '/videos/list' },
    ],
  },
  { name: 'البرامج', icon: FileText, href: '/programs' },
  { name: 'وحده التحكم', icon: Settings, href: '/settings' },
  { name: 'الاشتراكات', icon: CreditCard, href: '/subscriptions' },
  { name: 'إدارة FAQ', icon: HelpCircle, href: '/faq' },
  { name: 'إدارة من نحن', icon: Info, href: '/about' },
];
