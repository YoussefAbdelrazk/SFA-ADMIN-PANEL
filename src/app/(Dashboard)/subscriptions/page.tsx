import { SubscriptionsTable } from '@/components/Subscriptions';
import { Button } from '@/components/ui/button';
import { BarChart3, Plus } from 'lucide-react';
import Link from 'next/link';

export default function SubscriptionsPage() {
  return (
    <div className='container mx-auto px-4 py-4 lg:py-8'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 lg:mb-8'>
        <div>
          <h1 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-2'>الاشتراكات</h1>
          <p className='text-gray-600 text-sm lg:text-base'>إدارة جميع اشتراكات المستخدمين</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <Link href='/subscriptions/statistics' className='w-full sm:w-auto'>
            <Button variant='outline' className='flex items-center gap-2 w-full sm:w-auto'>
              <BarChart3 className='w-4 h-4' />
              الإحصائيات
            </Button>
          </Link>
          <Link href='/subscriptions/add' className='w-full sm:w-auto'>
            <Button className='bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 w-full sm:w-auto'>
              <Plus className='w-4 h-4' />
              إضافة اشتراك جديد
            </Button>
          </Link>
        </div>
      </div>

      <SubscriptionsTable />
    </div>
  );
}
