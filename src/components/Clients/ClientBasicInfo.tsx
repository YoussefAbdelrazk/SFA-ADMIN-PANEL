'use client';

import { Client } from '@/lib/data/ClientsData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ClientBasicInfoProps {
  client: Client;
}

export default function ClientBasicInfo({ client }: ClientBasicInfoProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const getGenderText = (gender: string) => {
    return gender === 'ذكر' ? 'ذكر' : 'انثي';
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-4'>
      {/* Header */}
      <div className='text-right mb-4'>
        <h1 className='text-xl font-bold text-gray-900 mb-2'>معلومات العميل الاساسيه</h1>
      </div>

      {/* Profile Picture and Basic Info */}
      <div className='flex items-start gap-3 mb-4'>
        <Avatar className='w-16 h-16'>
          <AvatarImage src='' alt={client.name} />
          <AvatarFallback className='text-base font-semibold bg-purple-100 text-purple-800'>
            {getInitials(client.firstName, client.lastName)}
          </AvatarFallback>
        </Avatar>

        <div className='flex-1'>
          <div className='grid grid-cols-2 gap-3'>
            {/* First Name */}
            <div className='text-right'>
              <div className='text-sm font-medium text-gray-500 mb-1'>الاسم الاول</div>
              <div className='text-sm text-gray-900'>{client.firstName}</div>
            </div>

            {/* Last Name */}
            <div className='text-left'>
              <div className='text-sm font-medium text-gray-500 mb-1'>الاسم الاخير</div>
              <div className='text-sm text-gray-900'>{client.lastName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Grid */}
      <div className='space-y-3'>
        {/* Birth Date */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>تاريخ الميلاد</div>
          <div className='text-sm text-gray-900'>{client.birthDate}</div>
        </div>

        {/* Gender */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>الجنس</div>
          <div className='text-sm text-gray-900'>{getGenderText(client.gender)}</div>
        </div>

        {/* Country */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>البلد</div>
          <div className='text-sm text-gray-900'>{client.country}</div>
        </div>

        {/* Email */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>البريد الالكتروني</div>
          <div className='text-sm text-gray-900'>{client.email}</div>
        </div>

        {/* Mobile */}
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <div className='text-sm font-medium text-gray-500'>الموبايل</div>
          <div className='text-sm text-gray-900'>+20 {client.mobile}</div>
        </div>
      </div>
    </div>
  );
}
