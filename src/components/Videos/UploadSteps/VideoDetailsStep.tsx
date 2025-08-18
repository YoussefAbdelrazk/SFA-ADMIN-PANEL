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
import {
  CALORIE_OPTIONS,
  DURATION_OPTIONS,
  FOCUS_AREAS,
  MUSIC_TYPES,
  VIDEO_CATEGORIES,
  VIDEO_LEVELS,
} from '@/lib/constants/videoOptions';
import { CompleteVideo } from '@/lib/schemas/videoSchema';
import { Image, Play, Upload } from 'lucide-react';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface VideoDetailsStepProps {
  form: UseFormReturn<CompleteVideo>;
}

export default function VideoDetailsStep({ form }: VideoDetailsStepProps) {
  const { register, setValue } = form;
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setValue('videoDetails.videoFile', file);
    }
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      setValue('videoDetails.coverImage', file);
    }
  };

  const handleSelectChange = (field: keyof CompleteVideo['videoDetails'], value: string) => {
    setValue(`videoDetails.${field}`, value);
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>تفاصيل الفيديو</h2>

        {/* Upload Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          {/* Cover Image Upload */}
          <div className='space-y-4'>
            <Label className='text-sm font-medium text-gray-700'>صورة الغلاف</Label>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors'>
              {coverImage ? (
                <div className='space-y-4'>
                  <div className='w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center'>
                    <Image className='w-12 h-12 text-gray-400' />
                  </div>
                  <p className='text-sm text-gray-600'>تم تحميل الصورة</p>
                  <Button
                    type='button'
                    variant='outline'
                    size='sm'
                    onClick={() => document.getElementById('coverImageInput')?.click()}
                  >
                    تغيير الصورة
                  </Button>
                </div>
              ) : (
                <div className='space-y-4'>
                  <Image className='w-16 h-16 mx-auto text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-600 mb-2'>
                      الرجاء رفع صورة واضحة تمثل محتوى الفيديو
                    </p>
                    <p className='text-xs text-gray-500'>
                      يفضل أن تكون أبعادها 1280x720 بكسل وبصيغة JPG أو PNG
                    </p>
                  </div>
                  <Button
                    type='button'
                    onClick={() => document.getElementById('coverImageInput')?.click()}
                    className='bg-purple-600 hover:bg-purple-700'
                  >
                    <Upload className='w-4 h-4 ml-2' />
                    تحميل صوره الغلاف
                  </Button>
                </div>
              )}
              <input
                id='coverImageInput'
                type='file'
                accept='image/*'
                onChange={handleCoverImageChange}
                className='hidden'
              />
            </div>
          </div>

          {/* Video Upload */}
          <div className='space-y-4'>
            <Label className='text-sm font-medium text-gray-700'>الفيديو</Label>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors'>
              {videoFile ? (
                <div className='space-y-4'>
                  <div className='w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center'>
                    <Play className='w-12 h-12 text-gray-400' />
                  </div>
                  <p className='text-sm text-gray-600'>تم تحميل الفيديو</p>
                  <Button
                    type='button'
                    variant='outline'
                    size='sm'
                    onClick={() => document.getElementById('videoFileInput')?.click()}
                  >
                    تغيير الفيديو
                  </Button>
                </div>
              ) : (
                <div className='space-y-4'>
                  <Play className='w-16 h-16 mx-auto text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-600 mb-2'>
                      الرجاء رفع ملف الفيديو بصيغة مناسبة مثل MP4 أو MOV
                    </p>
                    <p className='text-xs text-gray-500'>
                      تأكد من أن جودة الفيديو عالية، وأن الملف لا يحتوي على أي أخطاء أثناء التشغيل
                    </p>
                    <p className='text-xs text-gray-500'>الحجم الأقصى المسموح به هو 500MB</p>
                  </div>
                  <Button
                    type='button'
                    onClick={() => document.getElementById('videoFileInput')?.click()}
                    className='bg-purple-600 hover:bg-purple-700'
                  >
                    <Upload className='w-4 h-4 ml-2' />
                    تحميل الفيديو
                  </Button>
                </div>
              )}
              <input
                id='videoFileInput'
                type='file'
                accept='video/*'
                onChange={handleVideoFileChange}
                className='hidden'
              />
            </div>
          </div>
        </div>

        {/* Video Link Section */}
        <div className='mb-6'>
          <Label className='text-sm font-medium text-gray-700 mb-2 block'>
            او قم مشاركه رابط الفديو
          </Label>
          <Input
            placeholder='مشاركه رابط الفديو'
            {...register('videoDetails.videoLink')}
            className='max-w-md'
          />
        </div>

        {/* Metadata Fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Left Column */}
          <div className='space-y-4'>
            {/* Duration */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                مدة الفيديو بالدقائق <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('duration', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر مدة الفيديو' />
                </SelectTrigger>
                <SelectContent>
                  {DURATION_OPTIONS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Focus Areas */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                مناطق التركيز <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('focusAreas', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر مناطق التركيز' />
                </SelectTrigger>
                <SelectContent>
                  {FOCUS_AREAS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Used Music */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                الموسيقى المستخدمة <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('usedMusic', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر نوع الموسيقى' />
                </SelectTrigger>
                <SelectContent>
                  {MUSIC_TYPES.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-4'>
            {/* Category */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                تصنيف الفيديو <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر تصنيف الفيديو' />
                </SelectTrigger>
                <SelectContent>
                  {VIDEO_CATEGORIES.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                مستوى الفيديو <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('level', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر مستوى الفيديو' />
                </SelectTrigger>
                <SelectContent>
                  {VIDEO_LEVELS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calories */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                عدد السعرات <span className='text-red-500'>*</span>
              </Label>
              <Select onValueChange={value => handleSelectChange('calories', value)}>
                <SelectTrigger>
                  <SelectValue placeholder='اختر عدد السعرات' />
                </SelectTrigger>
                <SelectContent>
                  {CALORIE_OPTIONS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
