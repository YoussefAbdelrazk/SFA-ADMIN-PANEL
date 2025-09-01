import Image from 'next/image';

export default function LeftLayoutAuth({ image }: { image: string }) {
  return (
    <div className='lg:w-1/2 bg-gradient-to-br from-[#5925DC]/10 to-[#5925DC]/20 p-8 lg:p-12 flex items-center justify-center'>
      <div className='text-center'>
        <div className='mb-8'>
          <div className='inline-flex items-center space-x-4  bg-white px-6 py-3 rounded-full shadow-md'>
            <div className='w-8 h-8 p-2 bg-[#5925DC] rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>S</span>
            </div>
            <span className='text-gray-800 font-semibold text-lg'>SHERIF FARANCA</span>
          </div>
        </div>

        <div className='relative'>
          <Image
            src={image}
            alt='Fitness Coaches'
            width={500}
            height={400}
            className='w-full h-auto max-w-md mx-auto'
            priority
          />
        </div>
      </div>
    </div>
  );
}
