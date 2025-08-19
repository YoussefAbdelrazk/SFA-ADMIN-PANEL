import ClientsTable from '@/components/Clients/ClientsTable';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className='arabic-text'>
      {/* Header Section */}
      <div className='mb-3'>
        <div className='flex items-center justify-between mb-2'>
          <div>
            <h1 className='text-3xl font-bold text-purple-600'>اداره العملاء</h1>
            <div className='text-sm text-purple-600'>العملاء</div>
          </div>
          <Button className='bg-green-600 hover:bg-green-700 flex items-center gap-2'>
            <Download className='w-4 h-4' />
            تصدير الي الاكسل
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <ClientsTable />
    </div>
  );
}
