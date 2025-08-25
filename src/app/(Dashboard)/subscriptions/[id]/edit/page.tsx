'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Subscription, subscriptionsData } from '@/lib/data/SubscriptionsData';
import { subscriptionSchema, type SubscriptionFormData } from '@/lib/schemas/subscriptionSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface EditSubscriptionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditSubscriptionPage({ params }: EditSubscriptionPageProps) {
  const router = useRouter();
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: '',
      duration: '',
      priceEGP: 0,
      priceUSD: 0,
      priceSAR: 0,
      priceEUR: 0,
      isFeatured: false,
      description: '',
      status: 'active',
    },
  });

  // Initialize form data when params are available
  useEffect(() => {
    params.then(({ id }) => {
      const foundSubscription = subscriptionsData.find(sub => sub.id === id);
      if (foundSubscription) {
        setSubscription(foundSubscription);
        form.reset({
          name: foundSubscription.name,
          duration: foundSubscription.duration,
          priceEGP: foundSubscription.priceEGP,
          priceUSD: foundSubscription.priceUSD,
          priceSAR: foundSubscription.priceSAR,
          priceEUR: foundSubscription.priceEUR,
          isFeatured: foundSubscription.isFeatured,
          description: foundSubscription.description || '',
          status: foundSubscription.status,
        });
      }
    });
  }, [params, form]);

  if (!subscription) {
    return <div>Loading...</div>;
  }

  const onSubmit = (data: SubscriptionFormData) => {
    // Here you would implement the actual form submission logic
    console.log('Updated form data:', data);
    params.then(({ id }) => {
      router.push(`/subscriptions/${id}`);
    });
  };

  const handleBack = () => {
    params.then(({ id }) => {
      router.push(`/subscriptions/${id}`);
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='flex items-center gap-4 mb-8'>
        <Button variant='outline' onClick={handleBack} className='flex items-center gap-2'>
          <ArrowLeft className='w-4 h-4' />
          رجوع
        </Button>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>تعديل الاشتراك</h1>
          <p className='text-gray-600'>تعديل بيانات الاشتراك: {subscription.name}</p>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>المعلومات الأساسية</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اسم الاشتراك</FormLabel>
                      <FormControl>
                        <Input placeholder='أدخل اسم الاشتراك' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='duration'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>مدة الاشتراك</FormLabel>
                      <FormControl>
                        <Input placeholder='مثال: 30 شهر' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الوصف</FormLabel>
                      <FormControl>
                        <Textarea placeholder='أدخل وصف الاشتراك' rows={3} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الحالة</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='اختر الحالة' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='active'>نشط</SelectItem>
                          <SelectItem value='inactive'>غير نشط</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='isFeatured'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-x-reverse rounded-md border p-4'>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>اشتراك مميز</FormLabel>
                        <FormDescription>تحديد ما إذا كان هذا الاشتراك مميزاً</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Pricing Information */}
            <Card>
              <CardHeader>
                <CardTitle>معلومات الأسعار</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <FormField
                  control={form.control}
                  name='priceEGP'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>السعر بالجنيه المصري</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='0' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='priceUSD'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>السعر بالدولار الأمريكي</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='0' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='priceSAR'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>السعر بالريال السعودي</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='0' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='priceEUR'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>السعر باليورو</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='0' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <Button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 flex items-center gap-2'
              disabled={form.formState.isSubmitting}
            >
              <Save className='w-4 h-4' />
              {form.formState.isSubmitting ? 'جاري الحفظ...' : 'حفظ التعديلات'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
