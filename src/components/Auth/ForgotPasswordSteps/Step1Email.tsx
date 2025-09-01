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
  forgotPasswordStep1Schema,
  type ForgotPasswordStep1Data,
} from '@/lib/schemas/forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface Step1EmailProps {
  onSubmit: (data: ForgotPasswordStep1Data) => void;
  isLoading?: boolean;
}

export function Step1Email({ onSubmit, isLoading = false }: Step1EmailProps) {
  const form = useForm<ForgotPasswordStep1Data>({
    resolver: zodResolver(forgotPasswordStep1Schema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = (data: ForgotPasswordStep1Data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                البريد الإلكتروني
              </FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    {...field}
                    type='email'
                    placeholder='أدخل بريدك الإلكتروني'
                    className='pl-10 pr-4 text-right'
                    disabled={isLoading}
                  />
                  <Mail className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#5925DC] w-4 h-4 focus-visible:ring-0 focus:outline-none' />
                </div>
              </FormControl>
              <FormMessage className='text-right text-red-500' />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='w-full bg-[#5925DC] hover:bg-[#5925DC]/90 text-white font-semibold py-3 text-lg'
          disabled={isLoading}
        >
          {isLoading ? 'جاري الإرسال...' : 'إرسال رمز التحقق'}
        </Button>
      </form>
    </Form>
  );
}
