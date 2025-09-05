'use client';

import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='h-screen bg-background arabic-text' dir='rtl'>
      <div className='flex h-full'>
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header onMobileMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
          <main className='flex-1 overflow-y-auto bg-gray-50/50 p-4 lg:p-6 pt-20 lg:pt-6'>
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
