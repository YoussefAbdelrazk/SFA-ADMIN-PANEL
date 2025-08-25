import { SubscriptionsTable } from '@/components/Subscriptions';
import { Button } from '@/components/ui/button';
import { BarChart3, Plus } from 'lucide-react';
import Link from 'next/link';

export default function SubscriptionsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>الاشتراكات</h1>
          <p className='text-gray-600'>إدارة جميع اشتراكات المستخدمين</p>
        </div>
        <div className='flex gap-3'>
          <Link href='/subscriptions/statistics'>
            <Button variant='outline' className='flex items-center gap-2'>
              <BarChart3 className='w-4 h-4' />
              الإحصائيات
            </Button>
          </Link>
          <Link href='/subscriptions/add'>
            <Button className='bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2'>
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
