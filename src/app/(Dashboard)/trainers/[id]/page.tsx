import { TrainerDetailsPage } from '@/components/Trainers';
import { trainersData } from '@/lib/data/TrainersData';
import { notFound } from 'next/navigation';

interface TrainerDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TrainerDetails({ params }: TrainerDetailsPageProps) {
  const { id } = await params;
  const trainer = trainersData.find(t => t.id === id);

  if (!trainer) {
    notFound();
  }

  return <TrainerDetailsPage trainer={trainer} />;
}
