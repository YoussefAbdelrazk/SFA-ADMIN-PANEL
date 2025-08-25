'use client';

import { Subscription, subscriptionsData } from '@/lib/data/SubscriptionsData';
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

export default function SubscriptionsTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubscriptions = subscriptionsData.filter(
    subscription =>
      subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscription.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleViewSubscription = (subscriptionId: string) => {
    router.push(`/subscriptions/${subscriptionId}`);
  };

  const handleDeleteSubscription = (subscription: Subscription) => {
    // Here you would implement the actual deletion logic
    console.log('Deleting subscription:', subscription.name);
  };

  const handleExportToExcel = () => {
    // Here you would implement the actual export logic
    console.log('Exporting subscriptions to Excel');
  };

  return (
    <>
      {/* Search and Actions Section */}
      <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
        <div className='flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between'>
          {/* Search Section */}
          <div className='flex flex-col sm:flex-row gap-3 flex-1 max-w-md'>
            <div className='relative flex-1'>
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
              <Input
                placeholder='البحث عن اشتراك...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-4 pr-10 bg-gray-50 border-gray-200 focus:bg-white'
              />
            </div>
            <Button className='bg-purple-600 hover:bg-purple-700 text-white px-6'>بحث</Button>
          </div>

          {/* Filter and Export Section */}
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3'>
            <Button variant='outline' className='flex items-center gap-2 justify-center'>
              <Filter className='w-4 h-4' />
              <span className='hidden sm:inline'>تخصيص البحث</span>
              <ChevronDown className='w-4 h-4' />
            </Button>
            <Button
              className='bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center'
              onClick={handleExportToExcel}
            >
              <FileText className='w-4 h-4' />
              <span className='hidden sm:inline'>تصدير الي الاكسل</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='bg-gray-50'>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  اسم الاشتراك
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  مدة الاشتراك
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  الاشتراك بالجنيه
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  الاشتراك بالدولار
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  الاشتراك بالريال
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  الاشتراك باليورو
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  الاشتراك مميز
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  حذف الاشتراك
                </TableHead>
                <TableHead className='text-right font-semibold text-gray-900 whitespace-nowrap'>
                  اجراء
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscriptions.map(subscription => (
                <TableRow
                  key={subscription.id}
                  className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
                >
                  <TableCell className='py-4'>
                    <div className='font-medium text-gray-900'>{subscription.name}</div>
                    {subscription.description && (
                      <div className='text-sm text-gray-500 mt-1'>{subscription.description}</div>
                    )}
                  </TableCell>
                  <TableCell className='py-4 text-gray-700 whitespace-nowrap'>
                    {subscription.duration}
                  </TableCell>
                  <TableCell className='py-4 text-gray-700 whitespace-nowrap'>
                    {subscription.priceEGP} جنيه
                  </TableCell>
                  <TableCell className='py-4 text-gray-700 whitespace-nowrap'>
                    {subscription.priceUSD} دولار
                  </TableCell>
                  <TableCell className='py-4 text-gray-700 whitespace-nowrap'>
                    {subscription.priceSAR} ريال
                  </TableCell>
                  <TableCell className='py-4 text-gray-700 whitespace-nowrap'>
                    {subscription.priceEUR} يورو
                  </TableCell>
                  <TableCell className='py-4'>
                    <Badge
                      className={
                        subscription.isFeatured
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-red-100 text-red-800 border-red-200'
                      }
                    >
                      {subscription.isFeatured ? 'نعم' : 'لا'}
                    </Badge>
                  </TableCell>
                  <TableCell className='py-4'>
                    <Button
                      variant='destructive'
                      size='sm'
                      className='flex items-center gap-2 bg-red-500 text-white hover:bg-red-600 whitespace-nowrap'
                      onClick={() => handleDeleteSubscription(subscription)}
                    >
                      <Trash2 className='w-4 h-4' />
                      <span className='hidden sm:inline'>حذف الاشتراك</span>
                    </Button>
                  </TableCell>
                  <TableCell className='py-4'>
                    <Button
                      variant='default'
                      size='sm'
                      className='bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-white whitespace-nowrap'
                      onClick={() => handleViewSubscription(subscription.id)}
                    >
                      <Eye className='w-4 h-4' />
                      <span className='hidden sm:inline'>عرض</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className='bg-white rounded-lg shadow-sm p-4 mt-4 mb-8'>
        <div className='flex flex-col sm:flex-row-reverse items-center gap-4 sm:justify-between'>
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
