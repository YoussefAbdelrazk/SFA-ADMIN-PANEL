'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDown,
  ArrowUp,
  Clock,
  CreditCard,
  DollarSign,
  UserCheck,
  Users,
  Video,
} from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  actionText: string;
  lastUpdated: string;
  iconName: string;
}

const iconMap = {
  Users,
  Video,
  UserCheck,
  CreditCard,
  DollarSign,
  Clock,
};

export function KPICard({ title, value, change, actionText, lastUpdated, iconName }: KPICardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Users;
  return (
    <Card className='hover:shadow-lg transition-shadow'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium arabic-text'>{title}</CardTitle>
        <Icon className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold arabic-text'>{value}</div>
        {change && (
          <div className='flex items-center pt-1'>
            <Badge
              variant={change.type === 'increase' ? 'default' : 'destructive'}
              className='text-xs'
            >
              {change.type === 'increase' ? (
                <ArrowUp className='h-3 w-3 mr-1' />
              ) : (
                <ArrowDown className='h-3 w-3 mr-1' />
              )}
              {change.value}%
            </Badge>
          </div>
        )}
        <div className='pt-4 space-y-2'>
          <Button variant='link' className='p-0 h-auto text-blue-600 arabic-text'>
            {actionText}
          </Button>
          <p className='text-xs text-muted-foreground arabic-text'>{lastUpdated}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Predefined KPI cards for the dashboard
const dashboardKPIsData = [
  {
    title: 'عدد المستخدمين',
    value: '250 مستخدم',
    change: { value: 3.8, type: 'increase' as const },
    actionText: 'عرض قائمة المستخدمين',
    actionHref: '/users',
    lastUpdated: 'اخر تحديث اليوم',
    icon: Users,
  },
  {
    title: 'عدد الفيديوهات',
    value: '200 فديو',
    actionText: 'عرض قائمة الفيديوهات',
    actionHref: '/videos/list',
    lastUpdated: 'اخر تحديث اليوم',
    icon: Video,
  },
  {
    title: 'عدد المدربين',
    value: '7 مدربين',
    change: { value: 1.1, type: 'increase' as const },
    actionText: 'عرض قائمة المدربين',
    actionHref: '/trainers',
    lastUpdated: 'اخر تحديث اليوم',
    icon: UserCheck,
  },
  {
    title: 'العائد المادي للاشتراك',
    value: '3500$ مجموع العائد',
    change: { value: 4.3, type: 'decrease' as const },
    actionText: 'عرض جميع التفاصيل',
    actionHref: '/subscriptions/statistics',
    lastUpdated: 'اخر تحديث اليوم',
    icon: DollarSign,
  },
  {
    title: 'عدد الاشتراكات',
    value: '150 مشترك',
    change: { value: 7.8, type: 'increase' as const },
    actionText: 'عرض جميع التفاصيل',
    actionHref: '/subscriptions',
    lastUpdated: 'اخر تحديث اليوم',
    icon: CreditCard,
  },
  {
    title: 'عدد الساعات للفيديوهات',
    value: '120 ساعه',
    actionText: 'عرض جميع التفاصيل',
    actionHref: '/videos/list',
    lastUpdated: 'اخر تحديث اليوم',
    icon: Clock,
  },
];

export { dashboardKPIsData as dashboardKPIs };
