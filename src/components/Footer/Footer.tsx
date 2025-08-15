import Link from 'next/link';

export function Footer() {
  return (
    <footer className='text-center py-4  text-gray-600'>
      <div className='mt-8 pt-2 border-t border-gray-100'>
        <div className='flex flex-col sm:flex-row-reverse items-center justify-center gap-2 text-center'>
          <span className='text-[#344054] text-xs opacity-70'>Designed & Developed by</span>
          <Link
            href='https://www.catalyst.com.eg/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#3E1492] to-[#2D0F6B] text-white text-xs font-semibold hover:from-[#2D0F6B] hover:to-[#3E1492] transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
          >
            <span className='relative z-10'>Catalyst</span>
            <div className='absolute inset-0 bg-gradient-to-r from-[#feda02] to-[#ffd700] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300'></div>
            <svg
              className='w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-300'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
