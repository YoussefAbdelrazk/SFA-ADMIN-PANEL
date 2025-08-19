'use client';

import { Client } from '@/lib/data/ClientsData';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface BlockClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  client: Client;
}

export function BlockClientModal({ isOpen, onClose, onConfirm, client }: BlockClientModalProps) {
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
            حظر حساب العميل
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 text-right'>
          <div className='text-gray-700'>
            <p className='mb-4'>انت علي وشك حظر العميل التالي:</p>

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

          <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
            <p className='text-red-800 text-sm'>
              بمجرد تاكيد الحظر ستم منع العميل من استخدام الحساب وتعطيل جميع صلاحياته والوصول داخل
              الحساب
            </p>
          </div>

          <div className='flex gap-3 justify-end'>
            <Button onClick={onConfirm} className='bg-red-600 hover:bg-red-700 text-white px-6'>
              حظر الحساب
            </Button>
            <Button
              variant='outline'
              onClick={onClose}
              className='border-purple-300 text-purple-600 hover:bg-purple-50 px-6'
            >
              الغاء
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
