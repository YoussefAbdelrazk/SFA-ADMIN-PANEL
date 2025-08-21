import { AddTrainerForm } from '@/components/Trainers';

export default function AddTrainerPage() {
  return (
    <div className='arabic-text'>
      {/* Header Section */}
      <div className='mb-3'>
        <div className='flex items-center justify-between mb-2'>
          <div>
            <h1 className='text-3xl font-bold text-purple-600'>إضافة مدرب جديد</h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <AddTrainerForm />
    </div>
  );
}
