import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className='bg-white border-b border-gray-200 px-4 lg:px-6 py-4'>
      <div className='flex items-center justify-between gap-4'>
        {/* Search Bar */}
        <div className='flex-1 max-w-md hidden md:block'>
          <div className='relative'>
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <Input
              placeholder='في ماذا تفكر...'
              className='pl-4 pr-10 bg-gray-50 border-gray-200 focus:bg-white arabic-text'
            />
          </div>
        </div>

        {/* Mobile Search Button */}
        <div className='md:hidden'>
          <Button variant='ghost' size='icon' className='relative'>
            <Search className='w-5 h-5' />
          </Button>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-2 lg:gap-4'>
          {/* Notifications */}
          <Button variant='ghost' size='icon' className='relative'>
            <Bell className='w-5 h-5' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></span>
          </Button>

          {/* User Profile */}
          <div className='flex items-center gap-2 lg:gap-3'>
            <Avatar className='w-8 h-8 lg:w-10 lg:h-10'>
              <AvatarImage src='/placeholder-avatar.jpg' alt='شريف فرنسا' />
              <AvatarFallback className='bg-purple-100 text-purple-600 text-sm lg:text-base'>
                ش
              </AvatarFallback>
            </Avatar>
            <div className='text-right arabic-text hidden sm:block'>
              <p className='font-semibold text-gray-900 text-sm lg:text-base'>شريف فرنسا</p>
              <p className='text-xs lg:text-sm text-gray-500'>المالك</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
