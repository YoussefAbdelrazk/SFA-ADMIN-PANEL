'use client';

import { User, usersData } from '@/lib/data/UsersData';
import { ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function UsersTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = usersData.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobile.includes(searchTerm) ||
      user.permissions.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleViewUser = (userId: string) => {
    router.push(`/users/${userId}`);
  };

  const handleToggleAccountStatus = (user: User) => {
    // Here you would implement the actual account status toggle logic
    console.log('Toggling account status for user:', user.name);
  };

  const handleDeleteUser = (user: User) => {
    // Here you would implement the actual user deletion logic
    console.log('Deleting user:', user.name);
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
                placeholder='البحث عن مستخدم...'
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
              <TableHead className='text-right font-semibold text-gray-700'>الاسم</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>رقم الموبايل</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                البريد الالكتروني
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>الصلاحيات</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>كلمه المرور</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>
                التحكم بالحساب
              </TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>حذف الحساب</TableHead>
              <TableHead className='text-right font-semibold text-gray-700'>اجراء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map(user => (
              <TableRow
                key={user.id}
                className='hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
              >
                <TableCell className='py-4'>
                  <div className='font-medium text-gray-900'>{user.name}</div>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{user.mobile}</TableCell>
                <TableCell className='py-4 text-gray-700'>{user.email}</TableCell>
                <TableCell className='py-4'>
                  <Badge
                    className={
                      user.permissions === 'ادمن'
                        ? 'bg-purple-100 text-purple-800 border-purple-200'
                        : 'bg-blue-100 text-blue-800 border-blue-200'
                    }
                  >
                    {user.permissions}
                  </Badge>
                </TableCell>
                <TableCell className='py-4 text-gray-700'>{user.password}</TableCell>
                <TableCell className='py-4'>
                  {user.isActive ? (
                    <Button
                      size='sm'
                      className='bg-red-600 hover:bg-red-700 text-white'
                      onClick={() => handleToggleAccountStatus(user)}
                    >
                      تعطيل الحساب
                    </Button>
                  ) : (
                    <Button
                      size='sm'
                      className='bg-green-600 hover:bg-green-700 text-white'
                      onClick={() => handleToggleAccountStatus(user)}
                    >
                      تفعيل الحساب
                    </Button>
                  )}
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    size='sm'
                    className='bg-red-600 hover:bg-red-700 text-white'
                    onClick={() => handleDeleteUser(user)}
                  >
                    حذف الحساب
                  </Button>
                </TableCell>
                <TableCell className='py-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='text-purple-600 border-purple-600 hover:bg-purple-50 flex items-center gap-2'
                    onClick={() => handleViewUser(user.id)}
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
