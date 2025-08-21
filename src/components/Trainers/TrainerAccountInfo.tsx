'use client';

import { Trainer } from '@/lib/data/TrainersData';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface TrainerAccountInfoProps {
  trainer: Trainer;
}

export default function TrainerAccountInfo({ trainer }: TrainerAccountInfoProps) {
  const handleActivateAccount = () => {
    // Here you would implement the actual activation logic
    console.log('Activating account for trainer:', trainer.name);
  };

  const handleDeactivateAccount = () => {
    // Here you would implement the actual deactivation logic
    console.log('Deactivating account for trainer:', trainer.name);
  };

  const handleAcceptTrainer = () => {
    // Here you would implement the actual acceptance logic
    console.log('Accepting trainer:', trainer.name);
  };

  const handleRejectTrainer = () => {
    // Here you would implement the actual rejection logic
    console.log('Rejecting trainer:', trainer.name);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-right text-lg font-semibold text-gray-800'>
          معلومات الحساب
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            تاريخ الانضمام
          </label>
          <p className='text-right text-gray-900 bg-gray-50 p-2 rounded border'>
            {trainer.joinDate}
          </p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            حالة الحساب
          </label>
          <div className='flex justify-end'>
            <Badge
              className={
                trainer.status === 'ساري'
                  ? 'bg-green-100 text-green-800 border-green-200'
                  : 'bg-red-100 text-red-800 border-red-200'
              }
            >
              {trainer.status}
            </Badge>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            تفعيل الحساب
          </label>
          <div className='flex justify-end'>
            {trainer.accountActivation === 'مفعل' ? (
              <Button
                size='sm'
                className='bg-red-600 hover:bg-red-700 text-white'
                onClick={handleDeactivateAccount}
              >
                الغاء التفعيل
              </Button>
            ) : (
              <Button
                size='sm'
                className='bg-green-600 hover:bg-green-700 text-white'
                onClick={handleActivateAccount}
              >
                تفعيل
              </Button>
            )}
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 text-right mb-1'>
            التحكم في الطلب
          </label>
          <div className='flex justify-end'>
            {trainer.orderControl === 'قبول المدرب' ? (
              <Button
                size='sm'
                className='bg-green-600 hover:bg-green-700 text-white'
                onClick={handleAcceptTrainer}
              >
                قبول المدرب
              </Button>
            ) : (
              <Button
                size='sm'
                className='bg-red-600 hover:bg-red-700 text-white'
                onClick={handleRejectTrainer}
              >
                رفض المدرب
              </Button>
            )}
          </div>
        </div>

        {/* <div className='pt-4 border-t border-gray-200'>
          <h4 className='text-sm font-medium text-gray-700 text-right mb-2'>إجراءات سريعة</h4>
          <div className='flex flex-col gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='text-blue-600 border-blue-600 hover:bg-blue-50'
            >
              تعديل المعلومات
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='text-orange-600 border-orange-600 hover:bg-orange-50'
            >
              إرسال رسالة
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='text-purple-600 border-purple-600 hover:bg-purple-50'
            >
              عرض السجل
            </Button>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
