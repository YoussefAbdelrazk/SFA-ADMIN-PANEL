'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Client } from '@/lib/data/ClientsData';
import { ArrowLeft, Calendar, Edit, Shield, Trash2, User, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ClientDetailsPageProps {
  client: Client;
}

export default function ClientDetailsPage({ client }: ClientDetailsPageProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/clients/${client.id}/edit`);
  };

  const handleDelete = () => {
    // Here you would implement the actual deletion logic
    console.log('Deleting client:', client.name);
    router.push('/clients');
  };

  const handleBack = () => {
    router.push('/clients');
  };

  return (
    <div className='container mx-auto px-4 py-4 lg:py-8'>
      {/* Header */}
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 lg:mb-8'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <Button variant='outline' onClick={handleBack} className='flex items-center gap-2 w-fit'>
            <ArrowLeft className='w-4 h-4' />
            رجوع
          </Button>
          <div>
            <h1 className='text-2xl lg:text-3xl font-bold text-gray-900'>{client.name}</h1>
            <p className='text-gray-600 text-sm lg:text-base'>تفاصيل العميل</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <Button
            onClick={handleEdit}
            className='bg-blue-600 hover:bg-blue-700 flex items-center gap-2 w-full sm:w-auto'
          >
            <Edit className='w-4 h-4' />
            تعديل
          </Button>
          <Button
            variant='destructive'
            onClick={handleDelete}
            className='bg-red-600 hover:bg-red-700 flex items-center gap-2 w-full sm:w-auto'
          >
            <Trash2 className='w-4 h-4' />
            حذف
          </Button>
        </div>
      </div>

      {/* Client Details */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <User className='w-5 h-5' />
              المعلومات الأساسية
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>الاسم الكامل:</span>
              <span className='font-medium text-sm lg:text-base'>{client.name}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>الاسم الأول:</span>
              <span className='font-medium text-sm lg:text-base'>{client.firstName}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>اسم العائلة:</span>
              <span className='font-medium text-sm lg:text-base'>{client.lastName}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>الجنس:</span>
              <Badge
                className={
                  client.gender === 'ذكر'
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-pink-100 text-pink-800 border-pink-200'
                }
              >
                {client.gender}
              </Badge>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>تاريخ الميلاد:</span>
              <span className='font-medium text-sm lg:text-base'>{client.birthDate}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>رقم الهاتف:</span>
              <span className='font-medium text-sm lg:text-base'>{client.mobile}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>البريد الإلكتروني:</span>
              <span className='font-medium text-sm lg:text-base break-all'>{client.email}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>البلد:</span>
              <span className='font-medium text-sm lg:text-base'>{client.country}</span>
            </div>
          </CardContent>
        </Card>

        {/* Account & Subscription Information */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Shield className='w-5 h-5' />
              معلومات الحساب والاشتراك
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>حالة الاشتراك:</span>
              <Badge
                className={
                  client.subscriptionStatus === 'ساري'
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-red-100 text-red-800 border-red-200'
                }
              >
                {client.subscriptionStatus}
              </Badge>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>حالة الحساب:</span>
              <Badge
                className={
                  client.accountStatus === 'مفعل'
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-red-100 text-red-800 border-red-200'
                }
              >
                {client.accountStatus}
              </Badge>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>محظور:</span>
              <Badge
                className={
                  client.isBlocked
                    ? 'bg-red-100 text-red-800 border-red-200'
                    : 'bg-green-100 text-green-800 border-green-200'
                }
              >
                {client.isBlocked ? 'نعم' : 'لا'}
              </Badge>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>تاريخ التسجيل:</span>
              <span className='font-medium text-sm lg:text-base'>{client.registrationDate}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>تاريخ بداية الاشتراك:</span>
              <span className='font-medium text-sm lg:text-base'>{client.subscriptionDate}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>تاريخ انتهاء الاشتراك:</span>
              <span className='font-medium text-sm lg:text-base'>{client.subscriptionEndDate}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Information */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
        {/* Video Activity */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Video className='w-5 h-5' />
              نشاط الفيديوهات
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 gap-2'>
              <span className='text-gray-600 text-sm lg:text-base'>عدد الفيديوهات المشاهدة:</span>
              <span className='font-bold text-lg text-purple-600'>
                {client.videosWatched} فيديو
              </span>
            </div>
            <div className='text-sm text-gray-500 text-center py-4'>
              إجمالي الفيديوهات التي تم مشاهدتها من قبل العميل
            </div>
          </CardContent>
        </Card>

        {/* Subscribed Programs */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Calendar className='w-5 h-5' />
              البرامج المشترك فيها
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            {client.subscribedPrograms.length > 0 ? (
              <div className='space-y-2'>
                {client.subscribedPrograms.map((program, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 py-2 border-b border-gray-100 last:border-b-0'
                  >
                    <div className='w-2 h-2 rounded-full bg-purple-500'></div>
                    <span className='font-medium text-sm lg:text-base'>{program}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-sm text-gray-500 text-center py-4'>
                لا توجد برامج مشترك فيها حالياً
              </div>
            )}
            <div className='text-sm text-gray-500 text-center pt-2'>
              إجمالي البرامج: {client.subscribedPrograms.length} برنامج
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
