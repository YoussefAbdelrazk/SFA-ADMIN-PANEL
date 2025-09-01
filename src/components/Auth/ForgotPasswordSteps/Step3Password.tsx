'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  forgotPasswordStep3Schema,
  type ForgotPasswordStep3Data,
} from '@/lib/schemas/forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Step3PasswordProps {
  onSubmit: (data: ForgotPasswordStep3Data) => void;
  isLoading?: boolean;
}

export function Step3Password({ onSubmit, isLoading = false }: Step3PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<ForgotPasswordStep3Data>({
    resolver: zodResolver(forgotPasswordStep3Schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (data: ForgotPasswordStep3Data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                كلمة المرور الجديدة
              </FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='أدخل كلمة المرور الجديدة'
                    className='pl-10 pr-4 text-right'
                    disabled={isLoading}
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute left-3 top-1/2 transform -translate-y-1/2  transition-colors text-[#5925DC]'
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className='w-4 h-4 text-[#5925DC]' />
                    ) : (
                      <Eye className='w-4 h-4 text-[#5925DC]' />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className='text-right text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                تأكيد كلمة المرور
              </FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    {...field}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='أعد إدخال كلمة المرور'
                    className='pl-10 pr-4 text-right'
                    disabled={isLoading}
                  />

                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute left-3 top-1/2 transform -translate-y-1/2  transition-colors text-[#5925DC]'
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className='w-4 h-4 text-[#5925DC]' />
                    ) : (
                      <Eye className='w-4 h-4 text-[#5925DC]' />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className='text-right text-red-500' />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full bg-[#5925DC] hover:bg-[#5925DC]/90 text-white font-semibold py-3 text-lg cursor-pointer'
          disabled={isLoading}
        >
          {isLoading ? 'جاري إعادة التعيين...' : 'إعادة تعيين كلمة المرور'}
        </Button>
      </form>
    </Form>
  );
}
