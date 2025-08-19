'use client';

import { Client } from '@/lib/data/ClientsData';
import { useRouter } from 'next/navigation';
import ClientAccountInfo from './ClientAccountInfo';
import ClientBasicInfo from './ClientBasicInfo';

interface ClientDetailsPageProps {
  client: Client;
}

export default function ClientDetailsPage({ client }: ClientDetailsPageProps) {
  const router = useRouter();

  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      {/* Header */}

      {/* Main Content */}
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Column - Basic Client Information */}
          <ClientBasicInfo client={client} />

          {/* Right Column - Account Information */}
          <ClientAccountInfo client={client} />
        </div>
      </div>
    </div>
  );
}
