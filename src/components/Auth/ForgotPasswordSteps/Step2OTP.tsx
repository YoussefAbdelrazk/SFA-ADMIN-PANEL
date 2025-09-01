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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  forgotPasswordStep2Schema,
  type ForgotPasswordStep2Data,
} from '@/lib/schemas/forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface Step2OTPProps {
  onSubmit: (data: ForgotPasswordStep2Data) => void;
  isLoading?: boolean;
  email: string;
  onResendOTP?: () => void;
}

export function Step2OTP({ onSubmit, isLoading = false, email, onResendOTP }: Step2OTPProps) {
  const form = useForm<ForgotPasswordStep2Data>({
    resolver: zodResolver(forgotPasswordStep2Schema),
    defaultValues: {
      otp: '',
    },
  });

  const handleSubmit = (data: ForgotPasswordStep2Data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='otp'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-right block text-sm font-medium text-gray-700'>
                رمز التحقق
              </FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isLoading}
                  containerClassName='justify-center'
                  data-error={!!form.formState.errors.otp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={5} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={0} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className='text-right text-red-500' />
            </FormItem>
          )}
        />
        <div className='text-center'>
          <Button
            type='button'
            variant='link'
            className='text-sm text-[#5925DC] hover:text-[#5925DC]/90 cursor-pointer'
            disabled={isLoading}
            onClick={onResendOTP}
          >
            إعادة إرسال الرمز
          </Button>
        </div>
        <Button
          type='submit'
          className='w-full bg-[#5925DC] hover:bg-[#5925DC]/90 text-white font-semibold py-3 text-lg cursor-pointer'
          disabled={isLoading}
        >
          {isLoading ? 'جاري التحقق...' : 'تحقق من الرمز'}
        </Button>
      </form>
    </Form>
  );
}
