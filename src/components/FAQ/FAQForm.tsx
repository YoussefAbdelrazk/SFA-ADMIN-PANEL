'use client';

import { faqFormSchema, type FAQFormData } from '@/lib/schemas/faqSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';

interface FAQFormProps {
  mode: 'add' | 'edit';
  initialData?: FAQFormData & { id?: string };
}

export function FAQForm({ mode, initialData }: FAQFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FAQFormData>({
    resolver: zodResolver(faqFormSchema),
    defaultValues: {
      question: '',
      answer: '',
      category: 'عام',
      isActive: true,
      ...initialData,
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  const onSubmit = async (data: FAQFormData) => {
    setIsSubmitting(true);
    try {
      if (mode === 'add') {
        // Here you would implement the actual API call to create the FAQ
        console.log('Creating FAQ:', data);
      } else {
        // Here you would implement the actual API call to update the FAQ
        console.log('Updating FAQ:', { id: initialData?.id, ...data });
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to FAQ list page
      router.push('/faq');
    } catch (error) {
      console.error('Error saving FAQ:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/faq');
  };

  return (
    <Card className='max-w-4xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-right text-xl font-semibold text-gray-900'>
          {mode === 'add' ? 'إضافة سؤال جديد' : 'تعديل السؤال'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Question Field */}
            <FormField
              control={form.control}
              name='question'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                    السؤال
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='اكتب السؤال هنا...' {...field} className='text-right' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Answer Field */}
            <FormField
              control={form.control}
              name='answer'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                    الإجابة
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='اكتب الإجابة هنا...'
                      {...field}
                      className='text-right min-h-[120px] resize-none'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category Field */}
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                    الفئة
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className='text-right'>
                        <SelectValue placeholder='اختر الفئة' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='عام'>عام</SelectItem>
                        <SelectItem value='تقني'>تقني</SelectItem>
                        <SelectItem value='مالي'>مالي</SelectItem>
                        <SelectItem value='أمني'>أمني</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Active Status Field */}
            <FormField
              control={form.control}
              name='isActive'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base text-right'>حالة النشاط</FormLabel>
                    <div className='text-sm text-gray-500 text-right'>
                      تحديد ما إذا كان السؤال نشطاً أم لا
                    </div>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className='flex justify-end gap-4 pt-6'>
              <Button
                type='button'
                variant='outline'
                onClick={handleCancel}
                className='px-6 py-2 border-purple-600 text-purple-600 hover:bg-purple-50'
              >
                الغاء
              </Button>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white'
              >
                {isSubmitting
                  ? mode === 'add'
                    ? 'جاري الإضافة...'
                    : 'جاري التحديث...'
                  : mode === 'add'
                  ? 'إضافة'
                  : 'تحديث'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
