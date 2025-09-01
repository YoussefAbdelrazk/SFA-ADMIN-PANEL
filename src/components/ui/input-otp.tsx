'use client';

import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot='input-otp'
      containerClassName={cn(
        'flex items-center justify-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      autoFocus
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='input-otp-group'
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot='input-otp-slot'
      data-active={isActive}
      className={cn(
        'relative flex h-12 w-12 items-center justify-center border-2 rounded-lg text-lg font-semibold shadow-sm transition-all outline-none',
        'border-gray-300 bg-white',
        'focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200',
        'data-[active=true]:border-purple-500 data-[active=true]:ring-2 data-[active=true]:ring-purple-200',
        'aria-invalid:border-red-500 aria-invalid:focus-within:border-red-500 aria-invalid:focus-within:ring-red-200',
        'data-[active=true]:aria-invalid:border-red-500 data-[active=true]:aria-invalid:ring-red-200',
        'data-[error=true]:border-red-500 data-[error=true]:ring-2 data-[error=true]:ring-red-200',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='animate-caret-blink bg-purple-500 h-6 w-px duration-1000' />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot='input-otp-separator' role='separator' className='text-gray-400' {...props}>
      <MinusIcon className='w-4 h-4' />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
