'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { subscriptionsData } from '@/lib/data/SubscriptionsData';
import { ArrowLeft, CreditCard, Star, TrendingUp, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SubscriptionStatisticsPage() {
  const router = useRouter();

  // Calculate statistics
  const totalSubscriptions = subscriptionsData.length;
  const activeSubscriptions = subscriptionsData.filter(sub => sub.status === 'active').length;
  const featuredSubscriptions = subscriptionsData.filter(sub => sub.isFeatured).length;
  const totalRevenueEGP = subscriptionsData.reduce((sum, sub) => sum + sub.priceEGP, 0);
  const totalRevenueUSD = subscriptionsData.reduce((sum, sub) => sum + sub.priceUSD, 0);
  const totalRevenueSAR = subscriptionsData.reduce((sum, sub) => sum + sub.priceSAR, 0);
  const totalRevenueEUR = subscriptionsData.reduce((sum, sub) => sum + sub.priceEUR, 0);

  // Duration analysis
  const durationCounts = subscriptionsData.reduce((acc, sub) => {
    acc[sub.duration] = (acc[sub.duration] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleBack = () => {
    router.push('/subscriptions');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='flex items-center gap-4 mb-8'>
        <Button variant='outline' onClick={handleBack} className='flex items-center gap-2'>
          <ArrowLeft className='w-4 h-4' />
          رجوع
        </Button>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>إحصائيات الاشتراكات</h1>
          <p className='text-gray-600'>نظرة عامة على أداء الاشتراكات</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>إجمالي الاشتراكات</CardTitle>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{totalSubscriptions}</div>
            <p className='text-xs text-muted-foreground'>جميع الاشتراكات</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>الاشتراكات النشطة</CardTitle>
            <TrendingUp className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{activeSubscriptions}</div>
            <p className='text-xs text-muted-foreground'>اشتراكات نشطة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>الاشتراكات المميزة</CardTitle>
            <Star className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{featuredSubscriptions}</div>
            <p className='text-xs text-muted-foreground'>اشتراكات مميزة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>معدل النشاط</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {totalSubscriptions > 0
                ? Math.round((activeSubscriptions / totalSubscriptions) * 100)
                : 0}
              %
            </div>
            <p className='text-xs text-muted-foreground'>نسبة الاشتراكات النشطة</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Overview */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
        <Card>
          <CardHeader>
            <CardTitle>إجمالي الإيرادات</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>بالجنيه المصري:</span>
              <span className='font-bold text-lg text-green-600'>
                {totalRevenueEGP.toLocaleString()} جنيه
              </span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>بالدولار الأمريكي:</span>
              <span className='font-bold text-lg text-blue-600'>
                {totalRevenueUSD.toLocaleString()} دولار
              </span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>بالريال السعودي:</span>
              <span className='font-bold text-lg text-purple-600'>
                {totalRevenueSAR.toLocaleString()} ريال
              </span>
            </div>
            <div className='flex justify-between items-center py-2'>
              <span className='text-gray-600'>باليورو:</span>
              <span className='font-bold text-lg text-orange-600'>
                {totalRevenueEUR.toLocaleString()} يورو
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>توزيع مدة الاشتراكات</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            {Object.entries(durationCounts).map(([duration, count]) => (
              <div
                key={duration}
                className='flex justify-between items-center py-2 border-b border-gray-100'
              >
                <span className='text-gray-600'>{duration}:</span>
                <div className='flex items-center gap-2'>
                  <span className='font-medium'>{count}</span>
                  <Badge variant='secondary'>
                    {Math.round((count / totalSubscriptions) * 100)}%
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Featured vs Regular Analysis */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
        <Card>
          <CardHeader>
            <CardTitle>تحليل الاشتراكات المميزة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600'>الاشتراكات المميزة:</span>
                <div className='flex items-center gap-2'>
                  <Badge className='bg-green-100 text-green-800 border-green-200'>
                    {featuredSubscriptions}
                  </Badge>
                  <span className='text-sm text-gray-500'>
                    ({Math.round((featuredSubscriptions / totalSubscriptions) * 100)}%)
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600'>الاشتراكات العادية:</span>
                <div className='flex items-center gap-2'>
                  <Badge className='bg-gray-100 text-gray-800 border-gray-200'>
                    {totalSubscriptions - featuredSubscriptions}
                  </Badge>
                  <span className='text-sm text-gray-500'>
                    (
                    {Math.round(
                      ((totalSubscriptions - featuredSubscriptions) / totalSubscriptions) * 100,
                    )}
                    %)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>حالة الاشتراكات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600'>الاشتراكات النشطة:</span>
                <div className='flex items-center gap-2'>
                  <Badge className='bg-green-100 text-green-800 border-green-200'>
                    {activeSubscriptions}
                  </Badge>
                  <span className='text-sm text-gray-500'>
                    ({Math.round((activeSubscriptions / totalSubscriptions) * 100)}%)
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600'>الاشتراكات غير النشطة:</span>
                <div className='flex items-center gap-2'>
                  <Badge className='bg-red-100 text-red-800 border-red-200'>
                    {totalSubscriptions - activeSubscriptions}
                  </Badge>
                  <span className='text-sm text-gray-500'>
                    (
                    {Math.round(
                      ((totalSubscriptions - activeSubscriptions) / totalSubscriptions) * 100,
                    )}
                    %)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>آخر الاشتراكات المضافة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {subscriptionsData.slice(0, 5).map(subscription => (
              <div
                key={subscription.id}
                className='flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-purple-500'></div>
                  <div>
                    <div className='font-medium'>{subscription.name}</div>
                    <div className='text-sm text-gray-500'>{subscription.createdAt}</div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Badge
                    className={
                      subscription.isFeatured
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-gray-100 text-gray-800 border-gray-200'
                    }
                  >
                    {subscription.isFeatured ? 'مميز' : 'عادي'}
                  </Badge>
                  <Badge
                    className={
                      subscription.status === 'active'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }
                  >
                    {subscription.status === 'active' ? 'نشط' : 'غير نشط'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
