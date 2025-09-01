import LeftLayoutAuth from '@/components/Auth/LeftLayoutAuth';
import { LoginForm } from '@/components/Auth/LoginForm';

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden'>
        <div className='flex flex-col lg:flex-row'>
          {/* Right Side - Login Form */}
          <div className='lg:w-1/2 p-8 lg:p-12 flex items-center justify-center'>
            <div className='w-full max-w-md'>
              <LoginForm />

              {/* Footer */}
              <div className='text-center mt-8'>
                <p className='text-sm text-[#5925DC]'>powered by Catalyst</p>
              </div>
            </div>
          </div>
          {/* Left Side - Illustration */}
          <LeftLayoutAuth image='/assets/images/Coaches-Login.png' />
        </div>
      </div>
    </div>
  );
}
