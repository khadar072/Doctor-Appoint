import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const status = query.get("status"); // Example: 'success' or 'failed'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        {status === "success" ? (
          <div>
            <h1 className="text-4xl font-semibold text-green-600">Payment Successful!</h1>
            <p className="mt-4 text-lg text-gray-600">
              Your payment has been processed successfully.
            </p>
            <a
              href="/"
              className="mt-6 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Go Back to Home
            </a>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-semibold text-red-600">Payment Failed</h1>
            <p className="mt-4 text-lg text-gray-600">
              Something went wrong. Please try again.
            </p>
            <a
              href="/"
              className="mt-6 inline-block px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Try Again
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
