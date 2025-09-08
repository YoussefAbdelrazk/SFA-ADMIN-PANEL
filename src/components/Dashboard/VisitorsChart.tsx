'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const visitorsData = [
  { period: '1-5 ابريل', users: 800, previous: 600 },
  { period: '6-10 ابريل', users: 1200, previous: 900 },
  { period: '11-15 ابريل', users: 1000, previous: 800 },
  { period: '16-20 ابريل', users: 1500, previous: 1100 },
  { period: '21-25 ابريل', users: 1300, previous: 1000 },
  { period: '26-31 ابريل', users: 1100, previous: 850 },
];

export function VisitorsChart() {
  return (
    <Card className='col-span-2'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='arabic-text'>عدد الزوار الجدد</CardTitle>
            <CardDescription className='arabic-text'>إبريل 2026</CardDescription>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='h-4 w-4 text-muted-foreground' />
            <Select defaultValue='this-month'>
              <SelectTrigger className='w-40'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='this-year' className='arabic-text'>
                  هذا العام
                </SelectItem>
                <SelectItem value='mid-year' className='arabic-text'>
                  منتصف العام الحالي
                </SelectItem>
                <SelectItem value='this-month' className='arabic-text'>
                  الشهر الحالي
                </SelectItem>
                <SelectItem value='this-week' className='arabic-text'>
                  هذا الاسبوع
                </SelectItem>
                <SelectItem value='yesterday' className='arabic-text'>
                  امس
                </SelectItem>
                <SelectItem value='today' className='arabic-text'>
                  اليوم
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className='h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={visitorsData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='period' className='text-xs' tick={{ fontSize: 12 }} />
              <YAxis
                className='text-xs'
                tick={{ fontSize: 12 }}
                label={{ value: 'مستخدم', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className='bg-white p-3 border rounded-lg shadow-lg'>
                        <p className='arabic-text font-medium'>{label}</p>
                        <p className='text-blue-600 arabic-text'>
                          هذا الشهر: {payload[0].value} مستخدم
                        </p>
                        <p className='text-gray-500 arabic-text'>
                          الشهر الماضي: {payload[1].value} مستخدم
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type='monotone'
                dataKey='users'
                stroke='#8b5cf6'
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              />
              <Line
                type='monotone'
                dataKey='previous'
                stroke='#e5e7eb'
                strokeWidth={2}
                dot={{ fill: '#e5e7eb', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
