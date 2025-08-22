import { ProgramsTable } from '@/components/Programs';

export default function ProgramsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-900 text-right'>البرامج</h1>
      </div>

      <ProgramsTable />
    </div>
  );
}
