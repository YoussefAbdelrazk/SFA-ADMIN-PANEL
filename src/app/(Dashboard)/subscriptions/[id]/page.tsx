'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Subscription, subscriptionsData } from '@/lib/data/SubscriptionsData';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SubscriptionDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SubscriptionDetailsPage({ params }: SubscriptionDetailsPageProps) {
  const router = useRouter();
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    params.then(({ id }) => {
      const foundSubscription = subscriptionsData.find(sub => sub.id === id);
      if (foundSubscription) {
        setSubscription(foundSubscription);
      }
    });
  }, [params]);

  if (!subscription) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    params.then(({ id }) => {
      router.push(`/subscriptions/${id}/edit`);
    });
  };

  const handleDelete = () => {
    // Here you would implement the actual deletion logic
    console.log('Deleting subscription:', subscription.name);
    router.push('/subscriptions');
  };

  const handleBack = () => {
    router.push('/subscriptions');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <Button variant='outline' onClick={handleBack} className='flex items-center gap-2'>
            <ArrowLeft className='w-4 h-4' />
            رجوع
          </Button>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>{subscription.name}</h1>
            <p className='text-gray-600'>تفاصيل الاشتراك</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <Button
            onClick={handleEdit}
            className='bg-blue-600 hover:bg-blue-700 flex items-center gap-2'
          >
            <Edit className='w-4 h-4' />
            تعديل
          </Button>
          <Button
            variant='destructive'
            onClick={handleDelete}
            className='bg-red-600 hover:bg-red-700 flex items-center gap-2'
          >
            <Trash2 className='w-4 h-4' />
            حذف
          </Button>
        </div>
      </div>

      {/* Subscription Details */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الأساسية</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>اسم الاشتراك:</span>
              <span className='font-medium'>{subscription.name}</span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>مدة الاشتراك:</span>
              <span className='font-medium'>{subscription.duration}</span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>الحالة:</span>
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
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>الاشتراك مميز:</span>
              <Badge
                className={
                  subscription.isFeatured
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-red-100 text-red-800 border-red-200'
                }
              >
                {subscription.isFeatured ? 'نعم' : 'لا'}
              </Badge>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>تاريخ الإنشاء:</span>
              <span className='font-medium'>{subscription.createdAt}</span>
            </div>
            {subscription.description && (
              <div className='flex justify-between items-start py-2 border-b border-gray-100'>
                <span className='text-gray-600'>الوصف:</span>
                <span className='font-medium text-right max-w-xs'>{subscription.description}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pricing Information */}
        <Card>
          <CardHeader>
            <CardTitle>معلومات الأسعار</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>السعر بالجنيه المصري:</span>
              <span className='font-medium text-lg'>{subscription.priceEGP} جنيه</span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>السعر بالدولار الأمريكي:</span>
              <span className='font-medium text-lg'>{subscription.priceUSD} دولار</span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-gray-100'>
              <span className='text-gray-600'>السعر بالريال السعودي:</span>
              <span className='font-medium text-lg'>{subscription.priceSAR} ريال</span>
            </div>
            <div className='flex justify-between items-center py-2'>
              <span className='text-gray-600'>السعر باليورو:</span>
              <span className='font-medium text-lg'>{subscription.priceEUR} يورو</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
