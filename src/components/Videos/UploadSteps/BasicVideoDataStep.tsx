'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CompleteVideo } from '@/lib/schemas/videoSchema';
import { Bold, Italic, Link, List, ListOrdered, Strikethrough, Underline } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

interface BasicVideoDataStepProps {
  form: UseFormReturn<CompleteVideo>;
}

export default function BasicVideoDataStep({ form }: BasicVideoDataStepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  const TextEditorToolbar = () => (
    <div className='flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-t-md'>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <Bold className='w-4 h-4' />
      </button>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <Italic className='w-4 h-4' />
      </button>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <Underline className='w-4 h-4' />
      </button>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <Strikethrough className='w-4 h-4' />
      </button>
      <div className='w-px h-4 bg-gray-300'></div>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <Link className='w-4 h-4' />
      </button>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <List className='w-4 h-4' />
      </button>
      <button type='button' className='p-1 hover:bg-gray-200 rounded'>
        <ListOrdered className='w-4 h-4' />
      </button>
    </div>
  );

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>المعلومات الاساسيه</h2>

        {/* Video Names Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
          {/* Arabic Name */}
          <div className='space-y-2'>
            <Label htmlFor='arabicName' className='text-sm font-medium text-gray-700'>
              اسم الفيديو (بالعربيه) <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='arabicName'
              placeholder='رقم الهويه (ID)'
              {...register('basicData.arabicName')}
              className={errors.basicData?.arabicName ? 'border-red-500' : ''}
            />
            {errors.basicData?.arabicName && (
              <p className='text-sm text-red-500'>{errors.basicData.arabicName.message}</p>
            )}
          </div>

          {/* English Name */}
          <div className='space-y-2'>
            <Label htmlFor='englishName' className='text-sm font-medium text-gray-700'>
              اسم الفيديو (بالانجليزيه) <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='englishName'
              placeholder='الاسم الاول'
              {...register('basicData.englishName')}
              className={errors.basicData?.englishName ? 'border-red-500' : ''}
            />
            {errors.basicData?.englishName && (
              <p className='text-sm text-red-500'>{errors.basicData.englishName.message}</p>
            )}
          </div>

          {/* French Name */}
          <div className='space-y-2'>
            <Label htmlFor='frenchName' className='text-sm font-medium text-gray-700'>
              اسم الفيديو (بالفرنسيه) <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='frenchName'
              placeholder='الاسم الثاني'
              {...register('basicData.frenchName')}
              className={errors.basicData?.frenchName ? 'border-red-500' : ''}
            />
            {errors.basicData?.frenchName && (
              <p className='text-sm text-red-500'>{errors.basicData.frenchName.message}</p>
            )}
          </div>
        </div>

        {/* Video Descriptions Section */}
        <div className='space-y-6'>
          {/* Arabic Description */}
          <div className='space-y-2'>
            <Label htmlFor='arabicDescription' className='text-sm font-medium text-gray-700'>
              وصف الفيديو (بالعربيه) <span className='text-red-500'>*</span>
            </Label>
            <div className='border border-gray-200 rounded-md'>
              <TextEditorToolbar />
              <Textarea
                id='arabicDescription'
                placeholder='قم بكتابه وصف الفيديو بالعربيه'
                rows={4}
                {...register('basicData.arabicDescription')}
                className={`border-0 rounded-t-none resize-none ${
                  errors.basicData?.arabicDescription ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.basicData?.arabicDescription && (
              <p className='text-sm text-red-500'>{errors.basicData.arabicDescription.message}</p>
            )}
          </div>

          {/* English Description */}
          <div className='space-y-2'>
            <Label htmlFor='englishDescription' className='text-sm font-medium text-gray-700'>
              وصف الفيديو (بالانجليزيه) <span className='text-red-500'>*</span>
            </Label>
            <div className='border border-gray-200 rounded-md'>
              <TextEditorToolbar />
              <Textarea
                id='englishDescription'
                placeholder='قم بكتابه وصف الفيديو بالانجليزيه'
                rows={4}
                {...register('basicData.englishDescription')}
                className={`border-0 rounded-t-none resize-none ${
                  errors.basicData?.englishDescription ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.basicData?.englishDescription && (
              <p className='text-sm text-red-500'>{errors.basicData.englishDescription.message}</p>
            )}
          </div>

          {/* French Description */}
          <div className='space-y-2'>
            <Label htmlFor='frenchDescription' className='text-sm font-medium text-gray-700'>
              وصف الفيديو (بالفرنيه) <span className='text-red-500'>*</span>
            </Label>
            <div className='border border-gray-200 rounded-md'>
              <TextEditorToolbar />
              <Textarea
                id='frenchDescription'
                placeholder='قم بكتابه وصف الفيديو بالانجليزيه'
                rows={4}
                {...register('basicData.frenchDescription')}
                className={`border-0 rounded-t-none resize-none ${
                  errors.basicData?.frenchDescription ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.basicData?.frenchDescription && (
              <p className='text-sm text-red-500'>{errors.basicData.frenchDescription.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
