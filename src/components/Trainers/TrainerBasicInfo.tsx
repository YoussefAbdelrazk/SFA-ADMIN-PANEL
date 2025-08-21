'use client';

import { Trainer } from '@/lib/data/TrainersData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface TrainerBasicInfoProps {
  trainer: Trainer;
}

export default function TrainerBasicInfo({ trainer }: TrainerBasicInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-right text-lg font-semibold text-gray-800'>
          المعلومات الأساسية
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Trainer Image */}
        <div className='flex justify-center mb-6'>
          <div className='relative'>
            <img
              src={trainer.image}
              alt={trainer.name}
              className='w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-lg'
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/images/video-placeholder.svg';
              }}
            />
            <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center'>
              <div className='w-3 h-3 bg-white rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
              الاسم الأول
            </label>
            <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
              {trainer.firstName}
            </p>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
              الاسم الأخير
            </label>
            <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
              {trainer.lastName}
            </p>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            الاسم الكامل
          </label>
          <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>{trainer.name}</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-600 text-right mb-1'>الجنس</label>
            <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
              {trainer.gender}
            </p>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
              تاريخ الميلاد
            </label>
            <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
              {trainer.joinDate}
            </p>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            رقم الموبايل
          </label>
          <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>{trainer.mobile}</p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            البريد الإلكتروني
          </label>
          <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>{trainer.email}</p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>البلد</label>
          <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
            {trainer.country}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
