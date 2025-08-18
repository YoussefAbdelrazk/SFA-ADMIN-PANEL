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
import { CALORIE_OPTIONS, TIME_OPTIONS } from '@/lib/constants/videoOptions';
import { CompleteVideo } from '@/lib/schemas/videoSchema';
import { Plus, Trash2 } from 'lucide-react';
// import { useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

interface CalorieDetailsStepProps {
  form: UseFormReturn<CompleteVideo>;
}

export default function CalorieDetailsStep({ form }: CalorieDetailsStepProps) {
  const {
    control,
    register,
    // setValue,
    formState: { errors },
  } = form;
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'calorieDetails.sections',
  });

  // const [editingSection, setEditingSection] = useState<string | null>(null);
  // const [editName, setEditName] = useState('');

  const addNewSection = () => {
    const newId = Date.now().toString();
    append({
      id: newId,
      name: '',
      time: '',
      calories: '',
    });
  };

  // const startEditing = (section: any) => {
  //   setEditingSection(section.id);
  //   setEditName(section.name);
  // };

  // const saveEdit = (sectionId: string) => {
  //   const sectionIndex = fields.findIndex(field => field.id === sectionId);
  //   if (sectionIndex !== -1) {
  //     update(sectionIndex, { ...fields[sectionIndex], name: editName });
  //   }
  //   setEditingSection(null);
  //   setEditName('');
  // };

  // const cancelEdit = () => {
  //   setEditingSection(null);
  //   setEditName('');
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
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>تفاصيل السعرات حسب الفقرات</h2>

        {/* Sections */}
        <div className='space-y-4 '>
          {fields.map((section, index) => (
            <div key={section.id} className='border border-gray-200 rounded-lg p-4 bg-gray-50'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Section Name */}
                <div className='space-y-2'>
                  <Label className='text-sm font-medium text-gray-700'>
                    قم بتخصيص اسم الفقره <span className='text-red-500'>*</span>
                  </Label>

                  <div className='flex items-center gap-2'>
                    <Input
                      {...register(`calorieDetails.sections.${index}.name`)}
                      placeholder='اسم الفقرة'
                      className='flex-1'
                    />
                  </div>
                </div>

                {/* Time */}
                <div className='space-y-2'>
                  <Label className='text-sm font-medium text-gray-700'>
                    تحديد التوقيت <span className='text-red-500'>*</span>
                  </Label>
                  <Select
                    onValueChange={value => handleSelectChange(section.id, 'time', value)}
                    value={section.time}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='تحديد التوقيت' />
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

                {/* Calories */}
                <div className='space-y-2'>
                  <Label className='text-sm font-medium text-gray-700'>
                    تحديد عدد السعرات <span className='text-red-500'>*</span>
                  </Label>
                  <Select
                    onValueChange={value => handleSelectChange(section.id, 'calories', value)}
                    value={section.calories}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='تحديد عدد السعرات' />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {CALORIE_OPTIONS.map(option => (
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
                <div className='mt-4 flex justify-end'>
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
        {errors.calorieDetails?.sections && (
          <p className='text-sm text-red-500 mt-2'>{errors.calorieDetails.sections.message}</p>
        )}
      </div>
    </div>
  );
}
