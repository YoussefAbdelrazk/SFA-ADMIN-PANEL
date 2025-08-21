'use client';

import { Trainer, trainersData } from '@/lib/data/TrainersData';
import { ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function TrainersTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrainers = trainersData.filter(
    trainer =>
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.mobile.includes(searchTerm),
  );

  const handleViewTrainer = (trainerId: string) => {
    router.push(`/trainers/${trainerId}`);
  };

  const handleActivateAccount = (trainer: Trainer) => {
    // Here you would implement the actual activation logic
    console.log('Activating account for trainer:', trainer.name);
  };

  const handleDeactivateAccount = (trainer: Trainer) => {
    // Here you would implement the actual deactivation logic
    console.log('Deactivating account for trainer:', trainer.name);
  };

  const handleAcceptTrainer = (trainer: Trainer) => {
    // Here you would implement the actual acceptance logic
    console.log('Accepting trainer:', trainer.name);
  };

  const handleRejectTrainer = (trainer: Trainer) => {
    // Here you would implement the actual rejection logic
    console.log('Rejecting trainer:', trainer.name);
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
                placeholder='البحث عن مدرب...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pr-10 text-right'
              />
            </div>
          </div>
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
              <TableHead className='text-right font-semibold text-gray-700'>اسم المدرب</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الجنس</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                تاريخ الانضمام
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>رقم الموبايل</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                البريد الالكتروني
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>البلد</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الحاله</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>تفعيل الحساب</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                التحكم في الطلب
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>اجراء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrainers.map(trainer => (
              <TableRow
                key={trainer.id}
                className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
              >
                <TableCell className='py-4'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className='w-10 h-10 rounded-full object-cover border-2 border-gray-200'
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/images/video-placeholder.svg';
                      }}
                    />
                    <div className='font-medium text-gray-900'>{trainer.name}</div>
                  </div>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{trainer.gender}</TableCell>
                <TableCell className='py-4 text-gray-700'>{trainer.joinDate}</TableCell>
                <TableCell className='py-4 text-gray-700'>{trainer.mobile}</TableCell>
                <TableCell className='py-4 text-gray-700'>{trainer.email}</TableCell>
                <TableCell className='py-4 text-gray-700'>{trainer.country}</TableCell>

                <TableCell className='py-4'>
                  <Badge
                    className={
                      trainer.status === 'ساري'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }
                  >
                    {trainer.status}
                  </Badge>
                </TableCell>
                <TableCell className='py-4'>
                  {trainer.accountActivation === 'مفعل' ? (
                    <Button
                      size='sm'
                      className='bg-red-600 hover:bg-red-700 text-white'
                      onClick={() => handleDeactivateAccount(trainer)}
                    >
                      الغاء التفعيل
                    </Button>
                  ) : (
                    <Button
                      size='sm'
                      className='bg-green-600 hover:bg-green-700 text-white'
                      onClick={() => handleActivateAccount(trainer)}
                    >
                      تفعيل
                    </Button>
                  )}
                </TableCell>
                <TableCell className='py-4'>
                  {trainer.orderControl === 'قبول المدرب' ? (
                    <Button
                      size='sm'
                      className='bg-green-600 hover:bg-green-700 text-white'
                      onClick={() => handleAcceptTrainer(trainer)}
                    >
                      قبول المدرب
                    </Button>
                  ) : (
                    <Button
                      size='sm'
                      className='bg-red-600 hover:bg-red-700 text-white'
                      onClick={() => handleRejectTrainer(trainer)}
                    >
                      رفض المدرب
                    </Button>
                  )}
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='text-purple-600 border-purple-600 hover:bg-purple-50 flex items-center gap-2'
                    onClick={() => handleViewTrainer(trainer.id)}
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
