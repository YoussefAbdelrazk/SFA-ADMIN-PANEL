'use client';

import { Client, clientsData } from '@/lib/data/ClientsData';
import { ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { BlockClientModal } from './BlockClientModal';
import { UnblockClientModal } from './UnblockClientModal';

export default function ClientsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showUnblockModal, setShowUnblockModal] = useState(false);

  const filteredClients = clientsData.filter(
    client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.mobile.includes(searchTerm),
  );

  const handleBlockClient = (client: Client) => {
    setSelectedClient(client);
    setShowBlockModal(true);
  };

  const handleUnblockClient = (client: Client) => {
    setSelectedClient(client);
    setShowUnblockModal(true);
  };

  const handleConfirmBlock = () => {
    // Here you would implement the actual blocking logic
    console.log('Blocking client:', selectedClient?.name);
    setShowBlockModal(false);
    setSelectedClient(null);
  };

  const handleConfirmUnblock = () => {
    // Here you would implement the actual unblocking logic
    console.log('Unblocking client:', selectedClient?.name);
    setShowUnblockModal(false);
    setSelectedClient(null);
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
                placeholder='البحث عن عميل...'
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
              <TableHead className='text-right font-semibold text-gray-700'>اسم العميل</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الجنس</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                تاريخ الميلاد
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>رقم الموبايل</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                البريد الالكتروني
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>البلد</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                حاله الاشتراك
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>حاله الحساب</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                التحكم في الوصول
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>اجراء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map(client => (
              <TableRow
                key={client.id}
                className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
              >
                <TableCell className='py-4'>
                  <div className='font-medium text-gray-900'>{client.name}</div>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{client.gender}</TableCell>
                <TableCell className='py-4 text-gray-700'>{client.birthDate}</TableCell>
                <TableCell className='py-4 text-gray-700'>{client.mobile}</TableCell>
                <TableCell className='py-4 text-gray-700'>{client.email}</TableCell>
                <TableCell className='py-4 text-gray-700'>{client.country}</TableCell>

                <TableCell className='py-4'>
                  <Badge
                    className={
                      client.subscriptionStatus === 'ساري'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }
                  >
                    {client.subscriptionStatus}
                  </Badge>
                </TableCell>
                <TableCell className='py-4'>
                  <Badge
                    className={
                      client.accountStatus === 'مفعل'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }
                  >
                    {client.accountStatus}
                  </Badge>
                </TableCell>
                <TableCell className='py-4'>
                  {client.isBlocked ? (
                    <Button
                      size='sm'
                      className='bg-green-600 hover:bg-green-700 text-white'
                      onClick={() => handleUnblockClient(client)}
                    >
                      فك حظر الحساب
                    </Button>
                  ) : (
                    <Button
                      size='sm'
                      className='bg-red-600 hover:bg-red-700 text-white'
                      onClick={() => handleBlockClient(client)}
                    >
                      حظر الحساب
                    </Button>
                  )}
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='text-purple-600 border-purple-600 hover:bg-purple-50 flex items-center gap-2'
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
      {/* <div className='flex items-center justify-between mt-6'>
        <div className='text-sm text-gray-600'>عرض 1 إلى 12 من 12 نتيجة</div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' className='flex items-center gap-2'>
            <ChevronRight className='w-4 h-4' />
            السابق
          </Button>
          <div className='flex items-center gap-1'>
            <Button
              variant='outline'
              size='sm'
              className='w-8 h-8 p-0 bg-purple-600 text-white border-purple-600'
            >
              1
            </Button>
          </div>
          <Button variant='outline' size='sm' className='flex items-center gap-2'>
            التالي
            <ChevronLeft className='w-4 h-4' />
          </Button>
        </div>
      </div> */}
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

      {/* Modals */}
      {selectedClient && (
        <>
          <BlockClientModal
            isOpen={showBlockModal}
            onClose={() => setShowBlockModal(false)}
            onConfirm={handleConfirmBlock}
            client={selectedClient}
          />
          <UnblockClientModal
            isOpen={showUnblockModal}
            onClose={() => setShowUnblockModal(false)}
            onConfirm={handleConfirmUnblock}
            client={selectedClient}
          />
        </>
      )}
    </>
  );
}
