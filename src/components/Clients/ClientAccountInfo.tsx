'use client';

import { Client } from '@/lib/data/ClientsData';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface ClientAccountInfoProps {
  client: Client;
}

export default function ClientAccountInfo({ client }: ClientAccountInfoProps) {
  const getSubscriptionStatusColor = (status: string) => {
    return status === 'ساري'
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-red-100 text-red-800 border-red-200';
  };

  const getAccountStatusColor = (status: string) => {
    return status === 'مفعل'
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-4'>
      {/* Header */}
      <div className='text-right mb-4'>
        <h2 className='text-xl font-bold text-gray-900 mb-2'>معلومات الحساب</h2>
      </div>

      {/* Account Information Grid */}
      <div className='space-y-3'>
        {/* Subscription Status */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>حالة الاشتراك</div>
          <Badge className={getSubscriptionStatusColor(client.subscriptionStatus)}>
            {client.subscriptionStatus}
          </Badge>
        </div>

        {/* Subscription Date */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>تاريخ الاشتراك</div>
          <div className='text-sm text-gray-900'>{client.subscriptionDate}</div>
        </div>

        {/* Registration Date */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>تاريخ التسجيل</div>
          <div className='text-sm text-gray-900'>{client.registrationDate}</div>
        </div>

        {/* Subscribed Programs */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>البرامج المشترك فيها</div>
          <Button variant='ghost' className='text-gray-700 hover:bg-gray-50 p-2'>
            <ChevronDown className='w-4 h-4 ml-1' />
            عرض البرامج
          </Button>
        </div>
      </div>

      {/* Account Status Section */}
      <div className='mt-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-3 text-right'>حالة الحساب</h3>

        <div className='space-y-3'>
          {/* Account Status */}
          <div className='flex justify-between items-center py-2 border-b border-gray-100'>
            <div className='text-sm font-medium text-gray-500'>حالة الحساب</div>
            <Badge className={getAccountStatusColor(client.accountStatus)}>
              {client.accountStatus}
            </Badge>
          </div>

          {/* Subscription End Date */}
          <div className='flex justify-between items-center py-2 border-b border-gray-100'>
            <div className='text-sm font-medium text-gray-500'>تاريخ انتهاء الاشتراك</div>
            <div className='text-sm text-gray-900'>{client.subscriptionEndDate}</div>
          </div>

          {/* Videos Watched */}
          <div className='flex justify-between items-center py-2 border-b border-gray-100'>
            <div className='text-sm font-medium text-gray-500'>
              عدد الفيديوهات التي تمت مشاهدتها
            </div>
            <div className='text-sm text-gray-900'>{client.videosWatched} فديو تم مشاهدته</div>
          </div>

          {/* Videos Watched Details */}
          <div className='flex justify-between items-center py-2 border-b border-gray-100'>
            <div className='text-sm font-medium text-gray-500'>الفيديوهات التي شاهدها</div>
            <Button variant='ghost' className='text-gray-700 hover:bg-gray-50 p-2'>
              <ChevronDown className='w-4 h-4 ml-1' />
              عرض الفديوهات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
