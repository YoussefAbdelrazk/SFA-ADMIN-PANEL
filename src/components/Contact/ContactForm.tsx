'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ContactFormData, contactFormSchema } from '@/lib/schemas/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Facebook, Globe, Instagram, Mail, Music, Phone, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Contact form data:', data);
      // Here you would typically send the data to your API
      alert('تم إرسال معلومات الاتصال بنجاح!');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-center arabic-text'>اتصل بنا</CardTitle>
        <CardDescription className='text-center arabic-text'>
          قم بتحديث معلومات الاتصال الخاصة بك
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {/* Mobile */}
          <div className='space-y-2'>
            <Label htmlFor='mobile' className='arabic-text'>
              رقم الموبايل *
            </Label>
            <div className='relative'>
              <Phone className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='mobile'
                type='tel'
                placeholder='أدخل رقم الموبايل'
                className='pr-10 arabic-text'
                {...register('mobile')}
              />
            </div>
            {errors.mobile && (
              <p className='text-red-500 text-sm arabic-text'>{errors.mobile.message}</p>
            )}
          </div>

          {/* Email */}
          <div className='space-y-2'>
            <Label htmlFor='email' className='arabic-text'>
              البريد الإلكتروني *
            </Label>
            <div className='relative'>
              <Mail className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='email'
                type='email'
                placeholder='أدخل البريد الإلكتروني'
                className='pr-10 arabic-text'
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className='text-red-500 text-sm arabic-text'>{errors.email.message}</p>
            )}
          </div>

          {/* Website */}
          <div className='space-y-2'>
            <Label htmlFor='website' className='arabic-text'>
              الموقع الإلكتروني
            </Label>
            <div className='relative'>
              <Globe className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='website'
                type='url'
                placeholder='https://example.com'
                className='pr-10 arabic-text'
                {...register('website')}
              />
            </div>
            {errors.website && (
              <p className='text-red-500 text-sm arabic-text'>{errors.website.message}</p>
            )}
          </div>

          {/* Facebook */}
          <div className='space-y-2'>
            <Label htmlFor='facebook' className='arabic-text'>
              فيسبوك
            </Label>
            <div className='relative'>
              <Facebook className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='facebook'
                type='url'
                placeholder='https://facebook.com/yourpage'
                className='pr-10 arabic-text'
                {...register('facebook')}
              />
            </div>
            {errors.facebook && (
              <p className='text-red-500 text-sm arabic-text'>{errors.facebook.message}</p>
            )}
          </div>

          {/* Instagram */}
          <div className='space-y-2'>
            <Label htmlFor='instagram' className='arabic-text'>
              إنستغرام
            </Label>
            <div className='relative'>
              <Instagram className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='instagram'
                type='url'
                placeholder='https://instagram.com/yourpage'
                className='pr-10 arabic-text'
                {...register('instagram')}
              />
            </div>
            {errors.instagram && (
              <p className='text-red-500 text-sm arabic-text'>{errors.instagram.message}</p>
            )}
          </div>

          {/* TikTok */}
          <div className='space-y-2'>
            <Label htmlFor='tiktok' className='arabic-text'>
              تيك توك
            </Label>
            <div className='relative'>
              <Music className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='tiktok'
                type='url'
                placeholder='https://tiktok.com/@yourpage'
                className='pr-10 arabic-text'
                {...register('tiktok')}
              />
            </div>
            {errors.tiktok && (
              <p className='text-red-500 text-sm arabic-text'>{errors.tiktok.message}</p>
            )}
          </div>

          {/* YouTube */}
          <div className='space-y-2'>
            <Label htmlFor='youtube' className='arabic-text'>
              يوتيوب
            </Label>
            <div className='relative'>
              <Youtube className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                id='youtube'
                type='url'
                placeholder='https://youtube.com/@yourchannel'
                className='pr-10 arabic-text'
                {...register('youtube')}
              />
            </div>
            {errors.youtube && (
              <p className='text-red-500 text-sm arabic-text'>{errors.youtube.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className='flex justify-center pt-4'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-purple-600 hover:bg-purple-700 text-white arabic-text'
            >
              {isSubmitting ? 'جاري الحفظ...' : 'حفظ معلومات الاتصال'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
