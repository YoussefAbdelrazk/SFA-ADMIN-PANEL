'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function AddTrainerForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    mobile: '',
    gender: '',
    joinDate: '',
    image: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual form submission logic
    console.log('Form data:', formData);
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      mobile: '',
      gender: '',
      joinDate: '',
      image: '',
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-6'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Image Upload Section */}
        <div className='flex justify-center mb-6'>
          <div className='text-center'>
            <div className='w-32 h-32 mx-auto mb-4 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer'>
              {formData.image ? (
                <img
                  src={formData.image}
                  alt='Trainer preview'
                  className='w-full h-full rounded-full object-cover'
                />
              ) : (
                <div className='text-gray-400'>
                  <svg
                    className='w-12 h-12 mx-auto mb-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                  <p className='text-sm'>صورة المدرب</p>
                </div>
              )}
            </div>
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = e => {
                    handleInputChange('image', e.target?.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className='hidden'
            />
            <label
              htmlFor='image'
              className='cursor-pointer text-sm text-purple-600 hover:text-purple-700 font-medium'
            >
              {formData.image ? 'تغيير الصورة' : 'اختيار صورة'}
            </label>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Right Column */}
          <div className='space-y-4'>
            <div>
              <Label
                htmlFor='firstName'
                className='text-right block mb-2 font-medium text-gray-700'
              >
                الاسم الاول
              </Label>
              <Input
                id='firstName'
                placeholder='الاسم الاول'
                value={formData.firstName}
                onChange={e => handleInputChange('firstName', e.target.value)}
                className='text-right'
                required
              />
            </div>

            <div>
              <Label htmlFor='email' className='text-right block mb-2 font-medium text-gray-700'>
                البريد الالكتروني
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='البريد الالكتروني'
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                className='text-right'
                required
              />
            </div>

            <div>
              <Label
                htmlFor='birthDate'
                className='text-right block mb-2 font-medium text-gray-700'
              >
                تاريخ الميلاد
              </Label>
              <Input
                id='birthDate'
                type='date'
                placeholder='تاريخ الميلاد'
                value={formData.birthDate}
                onChange={e => handleInputChange('birthDate', e.target.value)}
                className='text-right'
                required
              />
            </div>

            <div>
              <Label htmlFor='gender' className='text-right block mb-2 font-medium text-gray-700'>
                الجنس
              </Label>
              <Select
                value={formData.gender}
                onValueChange={value => handleInputChange('gender', value)}
              >
                <SelectTrigger className='text-right'>
                  <SelectValue placeholder='الجنس' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='ذكر'>ذكر</SelectItem>
                  <SelectItem value='انثي'>انثي</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Left Column */}
          <div className='space-y-4'>
            <div>
              <Label htmlFor='lastName' className='text-right block mb-2 font-medium text-gray-700'>
                الاسم الاخير
              </Label>
              <Input
                id='lastName'
                placeholder='الاسم الاخير'
                value={formData.lastName}
                onChange={e => handleInputChange('lastName', e.target.value)}
                className='text-right'
                required
              />
            </div>

            <div>
              <Label htmlFor='mobile' className='text-right block mb-2 font-medium text-gray-700'>
                الموبايل
              </Label>
              <Input
                id='mobile'
                placeholder='رقم الهويه (ID)'
                value={formData.mobile}
                onChange={e => handleInputChange('mobile', e.target.value)}
                className='text-right'
                required
              />
            </div>

            <div>
              <Label htmlFor='joinDate' className='text-right block mb-2 font-medium text-gray-700'>
                تاريخ الانضمام
              </Label>
              <Input
                id='joinDate'
                type='date'
                placeholder='تاريخ الانضمام'
                value={formData.joinDate}
                onChange={e => handleInputChange('joinDate', e.target.value)}
                className='text-right'
                required
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center justify-between pt-6 border-t border-gray-200'>
          <Button
            type='button'
            variant='outline'
            onClick={handleCancel}
            className='border-purple-600 text-purple-600 hover:bg-purple-50'
          >
            الغاء
          </Button>
          <Button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white'>
            حفظ
          </Button>
        </div>
      </form>
    </div>
  );
}
