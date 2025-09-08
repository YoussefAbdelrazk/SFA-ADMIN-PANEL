import { ContactForm } from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 arabic-text text-center'>
          إدارة معلومات الاتصال
        </h1>
        <p className='text-gray-600 arabic-text text-center mt-2'>
          قم بتحديث معلومات الاتصال الخاصة بالمنصة
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
