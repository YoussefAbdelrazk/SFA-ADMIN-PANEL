'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  type ForgotPasswordStep1Data,
  type ForgotPasswordStep2Data,
  type ForgotPasswordStep3Data,
} from '@/lib/schemas/forgotPasswordSchema';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Step1Email, Step2OTP, Step3Password } from './ForgotPasswordSteps';

interface ForgotPasswordProps {
  onBackToLogin?: () => void;
}

export function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = async (data: ForgotPasswordStep1Data) => {
    setIsLoading(true);
    try {
      console.log('Sending OTP to:', data.email);
      setEmail(data.email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setCurrentStep(2);
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (data: ForgotPasswordStep2Data) => {
    setIsLoading(true);
    try {
      console.log('Verifying OTP:', data.otp);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setCurrentStep(3);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (data: ForgotPasswordStep3Data) => {
    setIsLoading(true);
    try {
      console.log('Resetting password for:', email);
      console.log('New password:', data.password);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to login page after successful password reset
      router.push('/login');
    } catch (error) {
      console.error('Error resetting password:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      console.log('Resending OTP to:', email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error resending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/login');
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'نسيت كلمة المرور؟';
      case 2:
        return 'رمز التحقق';
      case 3:
        return 'إعادة تعيين كلمة المرور';
      default:
        return 'نسيت كلمة المرور؟';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return 'أدخل بريدك الإلكتروني لإرسال رمز التحقق';
      case 2:
        return `تم إرسال رمز التحقق إلى ${email}`;
      case 3:
        return 'أدخل كلمة المرور الجديدة';
      default:
        return '';
    }
  };

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader className='text-center space-y-2'>
        <div className='flex items-center justify-between mb-4'>
          <Button
            type='button'
            variant='ghost'
            size='sm'
            onClick={goBack}
            className='text-gray-600 hover:text-gray-800'
          >
            <ArrowLeft className='w-4 h-4 ml-1' />
            رجوع
          </Button>
          <div className='flex space-x-2 space-x-reverse'>
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full ${
                  step <= currentStep ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <CardTitle className='text-2xl font-bold text-[#5925DC]'>{getStepTitle()}</CardTitle>
        <CardDescription className='text-lg text-[#5925DC]/90'>
          {getStepDescription()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {currentStep === 1 && <Step1Email onSubmit={handleEmailSubmit} isLoading={isLoading} />}

        {currentStep === 2 && (
          <Step2OTP
            onSubmit={handleOtpSubmit}
            isLoading={isLoading}
            email={email}
            onResendOTP={handleResendOTP}
          />
        )}

        {currentStep === 3 && (
          <Step3Password onSubmit={handlePasswordSubmit} isLoading={isLoading} />
        )}
      </CardContent>
    </Card>
  );
}
