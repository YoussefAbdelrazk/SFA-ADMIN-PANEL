'use client';

import { userFormSchema, type UserFormData } from '@/lib/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function AddUserForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: '',
      email: '',
      mobile: '',
      password: '',
      permissions: 'مستخدم',
    },
  });

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would implement the actual API call to create the user
      console.log('Creating user:', data);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to users list page
      router.push('/users');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/users');
  };

  return (
    <Card className='max-w-4xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-right text-xl font-semibold text-gray-900'>
          معلومات المستخدم الاساسيه
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Right Column */}
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                        اسم المستخدم
                      </FormLabel>
                      <FormControl>
                        <Input placeholder='اسم المستخدم' {...field} className='text-right' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                        البريد الالكتروني
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='البريد الالكتروني'
                          {...field}
                          className='text-right'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Left Column */}
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='mobile'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                        رقم الموبايل
                      </FormLabel>
                      <FormControl>
                        <Input placeholder='رقم الموبايل' {...field} className='text-right' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                        كلمه المرور
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='كلمه المرور'
                          {...field}
                          className='text-right'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Permissions Section */}
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='permissions'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                      الصلاحيات
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className='text-right'>
                          <SelectValue placeholder='الصلاحيات' />
                          {/* <ChevronDown className='w-4 h-4 mr-2' /> */}
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='مستخدم'>
                            <div className='flex items-center gap-2'>
                              {form.watch('permissions') === 'مستخدم' && (
                                <Check className='w-4 h-4 text-purple-600' />
                              )}
                              مستخدم
                            </div>
                          </SelectItem>
                          <SelectItem value='ادمن'>
                            <div className='flex items-center gap-2'>
                              {form.watch('permissions') === 'ادمن' && (
                                <Check className='w-4 h-4 text-purple-600' />
                              )}
                              ادمن
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                {isSubmitting ? 'جاري الحفظ...' : 'حفظ'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
