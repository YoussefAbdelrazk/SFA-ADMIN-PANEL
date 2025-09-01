'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema, type LoginFormData } from '@/lib/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
  isLoading?: boolean;
  onForgotPassword?: () => void;
}

export function LoginForm({
  onSubmit,
  isLoading: externalLoading,
  onForgotPassword,
}: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleshowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default login logic
        console.log('Login data:', data);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO: Implement actual login logic and redirect
        // router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const RouterForgotPassword = () => {
    router.push('/forgot-password');
  };

  const finalLoading = externalLoading || isLoading;

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader className='text-center space-y-2'>
        <CardTitle className='text-2xl font-bold text-purple-800'>
          اهلا بك في منصه شريف فرنسا
        </CardTitle>
        <CardDescription className='text-lg text-purple-600'>لوحة التحكم</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                    البريد الالكتروني
                  </FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        {...field}
                        type='email'
                        placeholder='البريد الالكتروني'
                        className='pl-10 pr-4 text-right focus:outline-none  focus:ring-0'
                        disabled={finalLoading}
                      />
                      <Mail className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#5925DC] w-4 h-4' />
                    </div>
                  </FormControl>
                  <FormMessage className='text-right text-red-500' />
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
                    <div className='relative'>
                      <Input
                        {...field}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='كلمه المرور'
                        className='pl-10 pr-4 text-right focus:outline-none  focus:ring-0'
                        disabled={finalLoading}
                      />

                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5925DC] hover:text-gray-600 transition-colors'
                        disabled={finalLoading}
                      >
                        {showPassword ? (
                          <EyeOff className='w-4 h-4' />
                        ) : (
                          <Eye className='w-4 h-4' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className='text-right text-red-500' />
                </FormItem>
              )}
            />

            <div className='flex items-center justify-end'>
              {/* <FormField
                control={form.control}
                name='rememberMe'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center space-x-2 space-x-reverse'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={finalLoading}
                      />
                    </FormControl>
                    <FormLabel className='text-sm text-gray-600'>ذكرني</FormLabel>
                  </FormItem>
                )}
              /> */}

              <Button
                type='button'
                variant='link'
                className='text-sm text-[#5925DC] cursor-pointer p-0 h-auto'
                disabled={finalLoading}
                onClick={RouterForgotPassword}
              >
                هل نسيت كلمه المرور ؟
              </Button>
            </div>

            <Button
              type='submit'
              className='w-full bg-[#5925DC] cursor-pointer text-white font-semibold py-3 text-lg'
              disabled={finalLoading}
            >
              {finalLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
