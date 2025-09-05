'use client';
import { NavigationItem } from '@/lib/types/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationItems } from './SidebarItems';

interface SidebarProps {
  isMobileMenuOpen: boolean;
}

export function Sidebar({ isMobileMenuOpen }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  // Function to check if an item or its children match the current path
  const isItemSelected = (item: NavigationItem): boolean => {
    if (item.href === pathname) return true;
    if (item.children) {
      return item.children.some(child => isItemSelected(child));
    }
    return false;
  };

  // Function to check if a parent item should be expanded based on current path
  const shouldExpandItem = (item: NavigationItem): boolean => {
    if (item.children) {
      return item.children.some(child => child.href === pathname);
    }
    return false;
  };

  // Initialize expanded items based on current path
  useEffect(() => {
    const newExpanded = new Set<string>();
    navigationItems.forEach(item => {
      if (shouldExpandItem(item)) {
        newExpanded.add(item.name);
      }
    });
    setExpandedItems(newExpanded);
  }, [pathname]);

  const toggleExpanded = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  const renderNavItem = (item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.name);
    const isSelected = isItemSelected(item);

    return (
      <li key={item.name}>
        <div className='flex flex-col'>
          {hasChildren ? (
            <button
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group arabic-text relative w-full text-left',
                level === 0 ? 'px-4' : 'px-8',
                isSelected
                  ? 'bg-purple-700 text-white border-r-4 border-yellow-400'
                  : 'text-purple-100 hover:bg-purple-800 hover:text-white',
              )}
              onClick={() => toggleExpanded(item.name)}
            >
              <item.icon className='w-5 h-5' />
              <span className='flex-1'>{item.name}</span>
              <span className='text-purple-300 group-hover:text-white transition-colors'>
                {isExpanded ? (
                  <ChevronDown className='w-5 h-5' />
                ) : (
                  <ChevronLeft className='w-5 h-5' />
                )}
              </span>
            </button>
          ) : (
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group arabic-text relative',
                level === 0 ? 'px-4' : 'px-8',
                isSelected
                  ? 'bg-purple-700 text-white border-r-4 border-yellow-400'
                  : 'text-purple-100 hover:bg-purple-800 hover:text-white',
              )}
            >
              <item.icon className='w-5 h-5' />
              <span className='flex-1'>{item.name}</span>
            </Link>
          )}

          {hasChildren && isExpanded && item.children && (
            <ul className='space-y-1 mt-1'>
              {item.children.map((child: NavigationItem) => renderNavItem(child, level + 1))}
            </ul>
          )}
        </div>
      </li>
    );
  };

  const SidebarContent = () => (
    <div className='w-64 bg-purple-900 text-white flex flex-col h-full'>
      {/* Logo */}
      <div className='p-6 border-b border-purple-800 flex-shrink-0'>
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
      <nav className='flex-1 p-4 overflow-y-auto'>
        <ul className='space-y-2'>{navigationItems.map(item => renderNavItem(item))}</ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          'lg:hidden fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div className='hidden lg:block'>
        <SidebarContent />
      </div>
    </>
  );
}
