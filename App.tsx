import React from 'react';
import { AuthTabs } from './components/AuthTabs';
import { Toaster } from 'react-hot-toast';
import { Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Wallet className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          PayFast
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fast and secure payments for everyone
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthTabs />
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;