import React from 'react';

const CancelPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-lg text-gray-700 mb-4">We're sorry, but your payment was not successful.</p>
        <p className="text-gray-500 mb-6">You can try again or contact support if you need assistance.</p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default CancelPage;
