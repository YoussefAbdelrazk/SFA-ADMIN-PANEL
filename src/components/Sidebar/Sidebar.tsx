import { cn } from '@/lib/utils';
import { navigationItems } from './SidebarItems';
import { ChevronLeft } from 'lucide-react';

export function Sidebar() {
  return (
    <div className='w-64 bg-purple-900 text-white flex flex-col'>
      {/* Logo */}
      <div className='p-6 border-b border-purple-800'>
        <div className='flex items-center flex-row-reverse justify-center gap-3'>
          <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
            <span className='text-purple-900 font-bold text-xl'>S</span>
          </div>
          <div>
            <h1 className='font-bold text-lg'> FARANCA</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4'>
        <ul className='space-y-2'>
          {navigationItems.map(item => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group',
                  item.active
                    ? 'bg-purple-700 text-white'
                    : 'text-purple-100 hover:bg-purple-800 hover:text-white',
                )}
              >
                <item.icon className='w-5 h-5' />
                <span className='flex-1'>{item.name}</span>
                <span className='text-purple-300 group-hover:text-white transition-colors'>
                  {' '}
                  <ChevronLeft className='w-5 h-5' />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
