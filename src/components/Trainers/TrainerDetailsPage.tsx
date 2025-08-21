'use client';

import { Trainer } from '@/lib/data/TrainersData';
import { useRouter } from 'next/navigation';
import TrainerAccountInfo from './TrainerAccountInfo';
import TrainerBasicInfo from './TrainerBasicInfo';

interface TrainerDetailsPageProps {
  trainer: Trainer;
}

export default function TrainerDetailsPage({ trainer }: TrainerDetailsPageProps) {
  const router = useRouter();

  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      {/* Header */}
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-purple-600'>تفاصيل المدرب</h1>
          </div>
          <button
            onClick={() => router.back()}
            className='text-purple-600 hover:text-purple-700 text-sm'
          >
            العودة
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Column - Basic Trainer Information */}
          <TrainerBasicInfo trainer={trainer} />

          {/* Right Column - Account Information */}
          <TrainerAccountInfo trainer={trainer} />
        </div>
      </div>
    </div>
  );
}
