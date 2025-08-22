'use client';

import { Program, programsData } from '@/lib/data/ProgramsData';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Filter,
  Search,
  Trash2,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function ProgramsTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = programsData.filter(
    program =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleViewProgram = (programId: string) => {
    router.push(`/programs/${programId}`);
  };

  const handleDeleteProgram = (program: Program) => {
    // Here you would implement the actual deletion logic
    console.log('Deleting program:', program.name);
  };

  const handleExportToExcel = () => {
    // Here you would implement the actual export logic
    console.log('Exporting programs to Excel');
  };

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
                placeholder='البحث عن برنامج...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-4 pr-10 bg-gray-50 border-gray-200 focus:bg-white'
              />
            </div>
            <Button className='bg-purple-600 hover:bg-purple-700 text-white'>بحث</Button>
          </div>

          {/* Filter and Export Section */}
          <div className='flex items-center gap-3'>
            <Button variant='outline' className='flex items-center gap-2'>
              <Filter className='w-4 h-4' />
              تخصيص البحث
              <ChevronDown className='w-4 h-4' />
            </Button>
            <Button
              className='bg-green-600 hover:bg-green-700 flex items-center gap-2'
              onClick={handleExportToExcel}
            >
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
              <TableHead className='text-right font-semibold text-gray-900'>أسم البرنامج</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>مدة البرنامج</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>
                عدد الفديوهات
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>
                تاريخ الاضافة
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>المنشئ</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>المستوى</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>المشتركين</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>حذف البرنامج</TableHead>
              <TableHead className='text-right font-semibold text-gray-900'>اجراء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPrograms.map(program => (
              <TableRow
                key={program.id}
                className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
              >
                <TableCell className='py-4'>
                  <div className='font-medium text-gray-900'>{program.name}</div>
                  {program.description && (
                    <div className='text-sm text-gray-500 mt-1'>{program.description}</div>
                  )}
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{program.duration}</TableCell>
                <TableCell className='py-4 text-gray-700'>{program.videoCount} فديو</TableCell>
                <TableCell className='py-4 text-gray-700'>{program.dateAdded}</TableCell>
                <TableCell className='py-4 text-gray-700'>{program.creator}</TableCell>
                <TableCell className='py-4'>
                  <Badge
                    className={
                      program.level === 'مبتدئ'
                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                        : program.level === 'متوسط'
                        ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                        : 'bg-purple-100 text-purple-800 border-purple-200'
                    }
                  >
                    {program.level}
                  </Badge>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>
                  {program.subscribers.toLocaleString()} مشترك
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    variant='destructive'
                    size='sm'
                    className='flex items-center gap-2 bg-red-500 text-white hover:bg-red-600'
                    onClick={() => handleDeleteProgram(program)}
                  >
                    <Trash2 className='w-4 h-4' />
                    حذف البرنامج
                  </Button>
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    variant='default'
                    size='sm'
                    className='bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-white'
                    onClick={() => handleViewProgram(program.id)}
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
      <div className='bg-white rounded-lg shadow-sm p-4 mt-4 mb-8'>
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
            <Button
              variant='outline'
              size='sm'
              className='px-3 py-1 bg-purple-600 text-white border-purple-600'
            >
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
