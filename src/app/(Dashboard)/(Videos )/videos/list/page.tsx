'use client';

import VideosTable from '@/components/Videos/VideosTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function VideosList() {
  return (
    <div className='arabic-text'>
      {/* Header Section */}
      <div className='mb-3'>
        <div className='flex items-center justify-between mb-2'>
          <h1 className='text-3xl font-bold text-gray-900'>الفيديوهات</h1>
          <Link href='/videos/add'>
            <Button className='bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-white'>
              <Plus className='w-4 h-4' />
              إضافة فيديو جديد
            </Button>
          </Link>
        </div>
      </div>
      <VideosTable />
    </div>
  );
}
