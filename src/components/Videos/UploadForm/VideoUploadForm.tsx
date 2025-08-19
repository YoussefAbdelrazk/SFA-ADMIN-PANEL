'use client';

import { Button } from '@/components/ui/button';
import { UPLOAD_STEPS } from '@/lib/constants/uploadSteps';
import { CompleteVideo, completeVideoSchema } from '@/lib/schemas/videoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VideoUploadSteps } from '../Navigation';
import BasicVideoDataStep from '../UploadSteps/BasicVideoDataStep';
import CalorieDetailsStep from '../UploadSteps/CalorieDetailsStep';
import MusicDetailsStep from '../UploadSteps/MusicDetailsStep';
import VideoDetailsStep from '../UploadSteps/VideoDetailsStep';

export default function VideoUploadForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<CompleteVideo>({
    resolver: zodResolver(completeVideoSchema),
    defaultValues: {
      basicData: {
        arabicName: '',
        englishName: '',
        frenchName: '',
        arabicDescription: '',
        englishDescription: '',
        frenchDescription: '',
      },
      videoDetails: {
        duration: '',
        focusAreas: '',
        usedMusic: '',
        category: '',
        level: '',
        calories: '',
      },
      calorieDetails: {
        sections: [{ id: '1', name: '', time: '', calories: '' }],
      },
      musicDetails: {
        sections: [{ id: '1', songName: '', startTime: '', endTime: '' }],
      },
    },
  });

  const nextStep = () => {
    if (currentStep < UPLOAD_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: CompleteVideo) => {
    try {
      console.log('Form data:', data);
      // Here you would typically send the data to your API
      alert('تم رفع الفيديو بنجاح!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء رفع الفيديو');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicVideoDataStep form={form} />;
      case 1:
        return <VideoDetailsStep form={form} />;
      case 2:
        return <CalorieDetailsStep form={form} />;
      case 3:
        return <MusicDetailsStep form={form} />;
      default:
        return <BasicVideoDataStep form={form} />;
    }
  };

  return (
    <div className='space-y-6'>
      {/* Step Navigation */}
      <VideoUploadSteps currentStep={currentStep} steps={UPLOAD_STEPS} />

      {/* Form Content */}
      <div className='bg-white rounded-lg shadow-sm p-6'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {renderStep()}

          {/* Action Buttons */}
          <div className='flex items-center justify-between mt-8 pt-6 border-t border-gray-200'>
            <div className='flex gap-3'>
              {currentStep > 0 && (
                <Button type='button' variant='outline' onClick={prevStep} className='px-6'>
                  السابق
                </Button>
              )}
              <Button type='button' variant='outline' className='px-6'>
                الغاء
              </Button>
            </div>

            <div className='flex gap-3'>
              {currentStep < UPLOAD_STEPS.length - 1 ? (
                <Button
                  type='button'
                  onClick={nextStep}
                  className='bg-purple-600 hover:bg-purple-700 px-6 text-white'
                >
                  التالي
                </Button>
              ) : (
                <Button type='submit' className='bg-purple-600 hover:bg-purple-700 px-6 text-white'>
                  حفظ
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
