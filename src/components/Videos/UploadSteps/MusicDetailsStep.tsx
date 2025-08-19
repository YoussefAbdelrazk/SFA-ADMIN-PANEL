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
import { TIME_OPTIONS } from '@/lib/constants/videoOptions';
import { CompleteVideo } from '@/lib/schemas/videoSchema';
import { Plus, Trash2 } from 'lucide-react';
// import { useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

interface MusicDetailsStepProps {
  form: UseFormReturn<CompleteVideo>;
}

export default function MusicDetailsStep({ form }: MusicDetailsStepProps) {
  const {
    control,
    register,
    // setValue,
    formState: { errors },
  } = form;
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'musicDetails.sections',
  });

  // const [editingSection, setEditingSection] = useState<string | null>(null);
  // const [editSongName, setEditSongName] = useState('');

  const addNewSection = () => {
    const newId = Date.now().toString();
    append({
      id: newId,
      songName: '',
      startTime: '',
      endTime: '',
    });
  };

  // const startEditing = (section: any) => {
  //   setEditingSection(section.id);
  //   setEditSongName(section.songName);
  // };

  // const saveEdit = (sectionId: string) => {
  //   const sectionIndex = fields.findIndex(field => field.id === sectionId);
  //   if (sectionIndex !== -1) {
  //     update(sectionIndex, { ...fields[sectionIndex], songName: editSongName });
  //   }
  //   setEditingSection(null);
  //   setEditSongName('');
  // };

  // const cancelEdit = () => {
  //   setEditingSection(null);
  //   setEditSongName('');
  // };

  const handleSelectChange = (sectionId: string, field: string, value: string) => {
    const sectionIndex = fields.findIndex(field => field.id === sectionId);
    if (sectionIndex !== -1) {
      update(sectionIndex, { ...fields[sectionIndex], [field]: value });
    }
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>تفاصيل الموسيقي حسب الفقرات</h2>

        {/* Song Details Section */}
        <div className='space-y-4'>
          {fields.map((section, index) => (
            <div key={section.id} className='border border-gray-200 rounded-lg p-4 bg-gray-50'>
              <div className='space-y-4'>
                {/* Song Name */}
                <div className='space-y-2'>
                  <Label className='text-sm font-medium text-gray-700'>
                    قم بتخصيص اسم الاغنيه <span className='text-red-500'>*</span>
                  </Label>

                  <div className='flex items-center gap-2'>
                    <Input
                      {...register(`musicDetails.sections.${index}.songName`)}
                      placeholder='اسم الأغنية'
                      className='flex-1'
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {/* Start Time */}
                  <div className='space-y-2'>
                    <Label className='text-sm font-medium text-gray-700'>
                      تحديد توقيت البدايه <span className='text-red-500'>*</span>
                    </Label>
                    <Select
                      onValueChange={value => handleSelectChange(section.id, 'startTime', value)}
                      value={section.startTime}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='تحديد توقيت البدايه' />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        {TIME_OPTIONS.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* End Time */}
                  <div className='space-y-2'>
                    <Label className='text-sm font-medium text-gray-700'>
                      تحديد توقيت النهايه <span className='text-red-500'>*</span>
                    </Label>
                    <Select
                      onValueChange={value => handleSelectChange(section.id, 'endTime', value)}
                      value={section.endTime}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='تحديد توقيت النهايه' />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        {TIME_OPTIONS.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Remove Button */}
                {fields.length > 1 && (
                  <div className='flex justify-end'>
                    <Button
                      type='button'
                      variant='destructive'
                      size='sm'
                      onClick={() => remove(index)}
                      className='flex items-center gap-2'
                    >
                      <Trash2 className='w-4 h-4' />
                      حذف الفقرة
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add New Section Button */}
        <div className='mt-6'>
          <Button
            type='button'
            onClick={addNewSection}
            variant='outline'
            className='w-full h-20 border-2 border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-colors'
          >
            <div className='flex flex-col items-center gap-2'>
              <Plus className='w-8 h-8 text-purple-600' />
              <span className='text-purple-600 font-medium'>اضافه فقره جديده</span>
            </div>
          </Button>
        </div>

        {/* Validation Errors */}
        {errors.musicDetails?.sections && (
          <p className='text-sm text-red-500 mt-2'>{errors.musicDetails.sections.message}</p>
        )}
      </div>
    </div>
  );
}
