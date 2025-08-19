import ClientDetailsPage from '@/components/Clients/ClientDetailsPage';
import { clientsData } from '@/lib/data/ClientsData';
import { notFound } from 'next/navigation';

interface ClientDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ClientDetails({ params }: ClientDetailsPageProps) {
  const { id } = await params;
  const client = clientsData.find(c => c.id === id);

  if (!client) {
    notFound();
  }

  return <ClientDetailsPage client={client} />;
}
