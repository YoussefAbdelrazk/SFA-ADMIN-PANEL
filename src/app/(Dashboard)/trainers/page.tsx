import { TrainersTable } from '@/components/Trainers';
import { Button } from '@/components/ui/button';
import { Download, Plus } from 'lucide-react';
import Link from 'next/link';

export default function TrainersPage() {
  return (
    <div className='arabic-text'>
      {/* Header Section */}
      <div className='mb-3'>
        <div className='flex items-center justify-between mb-2'>
          <div>
            <h1 className='text-3xl font-bold text-purple-600'>اداره المدربين</h1>
          </div>
          <div className='flex items-center gap-2'>
            <Link href='/trainers/add'>
              <Button className='bg-green-600 hover:bg-green-700 flex items-center gap-2'>
                <Plus className='w-4 h-4' />
                إضافة مدرب جديد
              </Button>
            </Link>
            <Button className='bg-green-600 hover:bg-green-700 flex items-center gap-2'>
              <Download className='w-4 h-4' />
              تصدير الي الاكسل
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <TrainersTable />
    </div>
  );
}
