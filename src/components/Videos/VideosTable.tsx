import { videosData } from '@/lib/data/VideosData';
import { ChevronLeft, ChevronRight, Eye, FileText, Search, Trash2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function VideosTable() {
  return (
    <>
      {/* Search and Actions Section */}
      <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
        <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
          {/* Search Section */}
          <div className='flex flex-1 max-w-md items-center gap-3'>
            <div className='relative flex-1'>
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
              <Input
                placeholder='البحث عن فيديو...'
                className='pl-4 pr-10 bg-gray-50 border-gray-200 focus:bg-white'
              />
            </div>
            <Button className='bg-purple-600 hover:bg-purple-700 text-white'>بحث</Button>
          </div>

          {/* Filter and Export Section */}
          <div className='flex items-center gap-3'>
            <Button className='bg-green-600 hover:bg-green-700 flex items-center gap-2'>
              <FileText className='w-4 h-4' />
              تصدير الي الاكسل
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className='bg-gray-50'>
              <TableHead className='text-right font-semibold text-gray-900'>الغلاف</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>اسم الفيديو</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>مدة الفيديو</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>السعرات</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>
                تاريخ الاضافة
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>اسم المدرب</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>التصنيف</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>حالة النشر</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>حذف الفديو</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>اجراء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videosData.map(video => (
              <TableRow key={video.id} className='hover:bg-gray-50'>
                <TableCell>
                  <div className='w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center'>
                    <div className='w-12 h-12 bg-gray-300 rounded flex items-center justify-center'>
                      <span className='text-gray-500 text-xs'>صورة</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='font-medium text-gray-900'>{video.name}</TableCell>
                <TableCell className='text-gray-600'>{video.duration}</TableCell>
                <TableCell className='text-gray-600'>{video.calories}</TableCell>
                <TableCell className='text-gray-600'>{video.dateAdded}</TableCell>
                <TableCell className='text-gray-600'>{video.trainerName}</TableCell>
                <TableCell className='text-gray-600'>{video.category}</TableCell>
                <TableCell>
                  <Badge
                    variant={video.status === 'visible' ? 'default' : 'destructive'}
                    className={
                      video.status === 'visible'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }
                  >
                    {video.status === 'visible' ? 'مرئي' : 'مخفي'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant='destructive'
                    size='sm'
                    className='flex items-center gap-2 bg-red-500 text-white'
                  >
                    <Trash2 className='w-4 h-4' />
                    حذف الفديو
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant='default'
                    size='sm'
                    className='bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-white'
                  >
                    <Eye className='w-4 h-4' />
                    عرض
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Section */}
      <div className='bg-white rounded-lg shadow-sm p-4 mt-4'>
        <div className='flex items-center flex-row-reverse justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>اظهار</span>
            <select className='border border-gray-300 rounded px-2 py-1 text-sm'>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              <ChevronRight className='w-4 h-4' />
            </Button>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              1
            </Button>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              2
            </Button>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              3
            </Button>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              4
            </Button>
            <Button variant='outline' size='sm' className='px-3 py-1'>
              <ChevronLeft className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
