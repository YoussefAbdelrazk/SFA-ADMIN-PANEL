'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TiptapEditor } from '@/components/ui/tiptap-editor';
import { AboutFormData, aboutFormSchema } from '@/lib/schemas/aboutSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileText, Globe, Languages } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function AboutForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<AboutFormData>({
    resolver: zodResolver(aboutFormSchema),
    defaultValues: {
      htmlAr: '',
      htmlEn: '',
      htmlFr: '',
    },
  });

  const watchedValues = watch();

  const onSubmit = async (data: AboutFormData) => {
    try {
      console.log('About form data:', data);
      // Here you would typically send the data to your API
      alert('تم حفظ محتوى "من نحن" بنجاح!');
    } catch (error) {
      console.error('Error submitting about form:', error);
      alert('حدث خطأ أثناء حفظ النموذج. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <Card className='w-full max-w-6xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-center arabic-text flex items-center justify-center gap-2'>
          <FileText className='w-6 h-6' />
          إدارة محتوى &quot;من نحن&quot;
        </CardTitle>
        <CardDescription className='text-center arabic-text'>
          قم بتحرير محتوى صفحة &quot;من نحن&quot; باللغات المختلفة
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <Tabs defaultValue='arabic' className='w-full'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='arabic' className='arabic-text flex items-center gap-2'>
                <Languages className='w-4 h-4' />
                العربية
              </TabsTrigger>
              <TabsTrigger value='english' className='flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                English
              </TabsTrigger>
              <TabsTrigger value='french' className='flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                Français
              </TabsTrigger>
            </TabsList>

            {/* Arabic Content */}
            <TabsContent value='arabic' className='space-y-4'>
              <div className='space-y-2'>
                <Label className='arabic-text text-lg font-semibold'>المحتوى العربي *</Label>
                <TiptapEditor
                  content={watchedValues.htmlAr}
                  onChange={content => setValue('htmlAr', content)}
                  placeholder="اكتب محتوى صفحة 'من نحن' باللغة العربية..."
                  className='min-h-[400px]'
                />
                {errors.htmlAr && (
                  <p className='text-red-500 text-sm arabic-text'>{errors.htmlAr.message}</p>
                )}
              </div>
            </TabsContent>

            {/* English Content */}
            <TabsContent value='english' className='space-y-4'>
              <div className='space-y-2'>
                <Label className='text-lg font-semibold'>English Content *</Label>
                <TiptapEditor
                  content={watchedValues.htmlEn}
                  onChange={content => setValue('htmlEn', content)}
                  placeholder="Write the 'About Us' page content in English..."
                  className='min-h-[400px]'
                />
                {errors.htmlEn && <p className='text-red-500 text-sm'>{errors.htmlEn.message}</p>}
              </div>
            </TabsContent>

            {/* French Content */}
            <TabsContent value='french' className='space-y-4'>
              <div className='space-y-2'>
                <Label className='text-lg font-semibold'>Contenu Français *</Label>
                <TiptapEditor
                  content={watchedValues.htmlFr}
                  onChange={content => setValue('htmlFr', content)}
                  placeholder="Écrivez le contenu de la page 'À propos' en français..."
                  className='min-h-[400px]'
                />
                {errors.htmlFr && <p className='text-red-500 text-sm'>{errors.htmlFr.message}</p>}
              </div>
            </TabsContent>
          </Tabs>

          {/* Submit Button */}
          <div className='flex justify-center pt-6 border-t'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full max-w-md bg-purple-600 hover:bg-purple-700 text-white arabic-text'
            >
              {isSubmitting ? 'جاري الحفظ...' : 'حفظ المحتوى'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
