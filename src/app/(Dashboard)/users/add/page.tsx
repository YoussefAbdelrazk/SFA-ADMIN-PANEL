import { AddUserForm } from '@/components/Users/AddUserForm';

export default function AddUserPage() {
  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 text-right'>إضافة مستخدم جديد</h1>
        <p className='text-gray-600 text-right mt-2'>إضافة مستخدم جديد إلى النظام</p>
      </div>

      <AddUserForm />
    </div>
  );
}
