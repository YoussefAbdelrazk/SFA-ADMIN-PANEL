import { NavigationItem } from '@/lib/types/navigation';
import {
  BarChart,
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
  { name: 'الرئسيه', icon: LayoutDashboard, href: '/' },
  { name: 'العملاء', icon: Users, href: '/clients' },
  { name: 'ارسال اشعار', icon: Bell, href: '/notifications' },
  {
    name: 'المدربين',
    icon: UserCheck,
    href: '/trainers',
    children: [
      { name: 'إضافة مدرب جديد', icon: Plus, href: '/trainers/add' },
      { name: ' الطلبات الانضمام', icon: Clock, href: '/trainers/pending' },
      { name: ' لائحة المدربين', icon: List, href: '/trainers' },
    ],
  },
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
  {
    name: 'البرامج',
    icon: FileText,
    href: '/programs',
    children: [
      { name: 'إضافة برنامج جديد', icon: Plus, href: '/programs/add' },
      { name: ' لائحة البرامج', icon: List, href: '/programs' },
      { name: ' تعديل البرنامج', icon: Clock, href: '/programs/udpate' },
    ],
  },
  { name: 'وحده التحكم', icon: Settings, href: '/settings' },
  {
    name: 'الاشتراكات',
    icon: CreditCard,
    href: '/subscriptions',
    children: [
      { name: 'إضافة اشتراك جديد', icon: Plus, href: '/subscriptions/add' },
      { name: ' لائحة الاشتراكات', icon: List, href: '/subscriptions' },

      { name: 'احصائيات الاشتراكات', icon: BarChart, href: '/subscriptions/statistics' },
    ],
  },
  { name: 'إدارة FAQ', icon: HelpCircle, href: '/faq' },
  { name: 'إدارة من نحن', icon: Info, href: '/about' },
];
