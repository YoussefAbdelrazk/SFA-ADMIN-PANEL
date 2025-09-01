import { FAQTable } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between mb-6'>
        <div className='text-right'>
          <h1 className='text-2xl font-bold text-gray-900'>إدارة الأسئلة الشائعة</h1>
          <p className='text-gray-600 mt-2'>إضافة وتعديل وحذف الأسئلة الشائعة</p>
        </div>
        <Link href='/faq/add'>
          <Button className='bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2'>
            <Plus className='w-4 h-4' />
            إضافة سؤال جديد
          </Button>
        </Link>
      </div>

      <FAQTable />
    </div>
  );
}
