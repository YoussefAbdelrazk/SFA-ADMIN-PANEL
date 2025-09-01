import { FAQForm } from '@/components/FAQ';

export default function AddFAQPage() {
  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 text-right'>إضافة سؤال جديد</h1>
        <p className='text-gray-600 text-right mt-2'>إضافة سؤال جديد إلى الأسئلة الشائعة</p>
      </div>

      <FAQForm mode='add' />
    </div>
  );
}
