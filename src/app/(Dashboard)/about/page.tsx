import { AboutForm } from '@/components/About';

export default function AboutPage() {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 arabic-text text-center'>
          إدارة محتوى &quot;من نحن&quot;
        </h1>
        <p className='text-gray-600 arabic-text text-center mt-2'>
          قم بتحرير وإدارة محتوى صفحة &quot;من نحن&quot; باللغات المختلفة
        </p>
      </div>

      <AboutForm />
    </div>
  );
}
