'use client';

import { FAQ, faqData } from '@/lib/data/FAQData';
import { ChevronDown, ChevronLeft, ChevronRight, Edit, Filter, Search, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function FAQTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const filteredFAQs = faqData.filter(
    faq =>
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'الكل' || faq.category === selectedCategory),
  );

  const handleEditFAQ = (faqId: string) => {
    router.push(`/faq/edit/${faqId}`);
  };

  const handleDeleteFAQ = (faq: FAQ) => {
    if (confirm(`هل أنت متأكد من حذف السؤال: "${faq.question}"؟`)) {
      // Here you would implement the actual deletion logic
      console.log('Deleting FAQ:', faq.id);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'عام':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'تقني':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'مالي':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'أمني':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      {/* Search and Actions Section */}
      <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
        <div className='flex items-center gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
              <Input
                placeholder='البحث في الأسئلة والأجوبة...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pr-10 text-right'
              />
            </div>
          </div>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className='border border-gray-300 rounded px-3 py-2 text-sm'
          >
            <option value='الكل'>جميع الفئات</option>
            <option value='عام'>عام</option>
            <option value='تقني'>تقني</option>
            <option value='مالي'>مالي</option>
            <option value='أمني'>أمني</option>
          </select>
          <Button variant='outline' className='flex items-center gap-2'>
            <Filter className='w-4 h-4' />
            تخصيص البحث
            <ChevronDown className='w-4 h-4' />
          </Button>
          <Button className='bg-purple-600 hover:bg-purple-700 text-white'>بحث</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className='bg-gray-50'>
              <TableHead className='text-right font-semibold text-gray-700'>السؤال</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الإجابة</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الفئة</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الحالة</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                تاريخ الإنشاء
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>التحكم</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFAQs.map(faq => (
              <TableRow
                key={faq.id}
                className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
              >
                <TableCell className='py-4'>
                  <div className='font-medium text-gray-900 max-w-xs truncate' title={faq.question}>
                    {faq.question}
                  </div>
                </TableCell>
                <TableCell className='py-4'>
                  <div className='text-gray-700 max-w-xs truncate' title={faq.answer}>
                    {faq.answer}
                  </div>
                </TableCell>
                <TableCell className='py-4'>
                  <Badge className={getCategoryColor(faq.category)}>{faq.category}</Badge>
                </TableCell>
                <TableCell className='py-4'>
                  <Badge
                    className={
                      faq.isActive
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }
                  >
                    {faq.isActive ? 'نشط' : 'غير نشط'}
                  </Badge>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{faq.createdAt}</TableCell>
                <TableCell className='py-4'>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='text-blue-600 border-blue-600 hover:bg-blue-50 flex items-center gap-2'
                      onClick={() => handleEditFAQ(faq.id)}
                    >
                      <Edit className='w-4 h-4' />
                      تعديل
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className='text-red-600 border-red-600 hover:bg-red-50 flex items-center gap-2'
                      onClick={() => handleDeleteFAQ(faq)}
                    >
                      <Trash2 className='w-4 h-4' />
                      حذف
                    </Button>
                  </div>
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
            <Button
              variant='outline'
              size='sm'
              className='px-3 py-1 bg-purple-600 text-white border-purple-600'
            >
              1
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

