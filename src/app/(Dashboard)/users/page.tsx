import { UsersTable } from '@/components/Users';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function UsersPage() {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between mb-6'>
        <div className='text-right'>
          <h1 className='text-2xl font-bold text-gray-900'>إدارة المستخدمين</h1>
          <p className='text-gray-600 mt-2'>عرض وإدارة جميع المستخدمين في النظام</p>
        </div>
        <Link href='/users/add'>
          <Button className='bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2'>
            <Plus className='w-4 h-4' />
            إضافة مستخدم جديد
          </Button>
        </Link>
      </div>

      <UsersTable />
    </div>
  );
}
