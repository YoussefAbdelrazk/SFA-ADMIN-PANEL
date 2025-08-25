import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='min-h-screen bg-background arabic-text' dir='rtl'>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header />
          <main className='flex-1 overflow-y-auto bg-gray-50/50 p-4 lg:p-6 pt-20 lg:pt-6'>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
