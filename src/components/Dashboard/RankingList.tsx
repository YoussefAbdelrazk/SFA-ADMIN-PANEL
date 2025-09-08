'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface RankingItem {
  rank: number;
  name: string;
  views: number;
  image?: string;
  type: 'instructor' | 'video';
}

interface RankingListProps {
  title: string;
  items: RankingItem[];
  type: 'instructor' | 'video';
}

const rankLabels = [
  'الاول',
  'الثاني',
  'الثالث',
  'الرابع',
  'الخامس',
  'السادس',
  'السابع',
  'الثامن',
  'التاسع',
  'العاشر',
];

export function RankingList({ title, items, type }: RankingListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='arabic-text'>{title}</CardTitle>
        <CardDescription className='arabic-text'>هذا الشهر</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {items.map((item, index) => (
            <div key={index} className='flex items-center space-x-4 space-x-reverse'>
              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm'>
                {index + 1}
              </div>

              {type === 'instructor' ? (
                <Avatar className='h-10 w-10'>
                  <AvatarImage src={item.image} alt={item.name} />
                  <AvatarFallback>
                    {item.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className='h-10 w-16 bg-gray-200 rounded flex items-center justify-center'>
                  <Play className='h-4 w-4 text-gray-500' />
                </div>
              )}

              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium arabic-text truncate'>{item.name}</p>
                <p className='text-xs text-muted-foreground arabic-text'>
                  {item.views.toLocaleString()} مشاهده
                </p>
              </div>

              <Badge variant='secondary' className='text-xs'>
                {rankLabels[index]}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data for instructors
export const topInstructors = [
  {
    rank: 1,
    name: 'ميرنا جبريال مينا',
    views: 17000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 2,
    name: 'شهد الباز السيد',
    views: 12000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 3,
    name: 'ماركو ذكرى جبريال',
    views: 10000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 4,
    name: 'كريم السيد حسن',
    views: 9000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 5,
    name: 'مريم عوض عوض',
    views: 7000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 6,
    name: 'هدير صابر حسن',
    views: 6000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 7,
    name: 'محمود قطب السيد',
    views: 2000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 8,
    name: 'فارس سليمان محسن',
    views: 1000,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 9,
    name: 'عمرو زيدان عوض',
    views: 700,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
  {
    rank: 10,
    name: 'وحيد رضوان السيد',
    views: 250,
    image: '/api/placeholder/40/40',
    type: 'instructor' as const,
  },
];

// Sample data for videos
export const topVideos = [
  { rank: 1, name: 'Tabata Extremes Fat', views: 17000, type: 'video' as const },
  { rank: 2, name: 'Walk Yourself Healthy', views: 12000, type: 'video' as const },
  { rank: 3, name: 'Free Premium Challenge', views: 10000, type: 'video' as const },
  { rank: 4, name: 'Walk Yourself Healthy', views: 9000, type: 'video' as const },
  { rank: 5, name: 'Full Body Challenge', views: 7000, type: 'video' as const },
  { rank: 6, name: 'Tabata Extremes Fat', views: 6000, type: 'video' as const },
  { rank: 7, name: 'Core Rhythm Walk', views: 2000, type: 'video' as const },
  { rank: 8, name: 'Dynamic Waist Walk', views: 1000, type: 'video' as const },
  { rank: 9, name: 'Slow Groove Bachate', views: 700, type: 'video' as const },
  { rank: 10, name: 'Hoppy Penguin Dance', views: 250, type: 'video' as const },
];
