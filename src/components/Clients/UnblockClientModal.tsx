'use client';

import { Client } from '@/lib/data/ClientsData';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface UnblockClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  client: Client;
}

export function UnblockClientModal({
  isOpen,
  onClose,
  onConfirm,
  client,
}: UnblockClientModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md bg-white'>
        <DialogHeader className='text-right'>
          <button
            onClick={onClose}
            className='absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
          >
            <X className='h-4 w-4' />
            {/* <span className='sr-only'>Close</span> */}
          </button>
          <DialogTitle className='text-xl font-bold text-gray-900 text-right'>
            فك حظر حساب العميل
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 text-right'>
          <div className='text-gray-700'>
            <p className='mb-4'>انت على وشك فك الحظر عن العميل التالي:</p>

            <div className='bg-gray-50 p-4 rounded-lg space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='font-medium text-gray-900'>الاسم:</span>
                <span className='text-gray-700'>{client.name}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='font-medium text-gray-900'>البريد الالكتروني:</span>
                <span className='text-gray-700'>{client.email}</span>
              </div>
            </div>
          </div>

          <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
            <p className='text-green-800 text-sm'>
              بمجرد تاكيد فك الحظر سيتم السماح العميل من استخدام الحساب واستخدام جميع صلاحيات الوصول
              داخل الحساب
            </p>
          </div>

          <div className='flex gap-3 justify-end'>
            <Button onClick={onConfirm} className='bg-green-600 hover:bg-green-700 text-white px-6'>
              فك حظر الحساب
            </Button>
            <Button
              variant='outline'
              onClick={onClose}
              className='border-gray-300 text-gray-600 hover:bg-gray-50 px-6'
            >
              الغاء
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
