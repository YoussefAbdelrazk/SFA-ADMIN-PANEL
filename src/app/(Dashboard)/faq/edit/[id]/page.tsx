import { FAQForm } from '@/components/FAQ';
import { faqData } from '@/lib/data/FAQData';
import { notFound } from 'next/navigation';

interface EditFAQPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditFAQPage({ params }: EditFAQPageProps) {
  const { id } = await params;
  const faq = faqData.find(f => f.id === id);

  if (!faq) {
    notFound();
  }

  const initialData = {
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
    category: faq.category,
    isActive: faq.isActive,
  };

  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 text-right'>تعديل السؤال</h1>
        <p className='text-gray-600 text-right mt-2'>تعديل السؤال: {faq.question}</p>
      </div>

      <FAQForm mode='edit' initialData={initialData} />
    </div>
  );
}
