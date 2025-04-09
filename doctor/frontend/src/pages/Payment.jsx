import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "@/context/UserContext";

const Payment = () => {
  const {token} = useContext(UserContext)
  const [formData, setFormData] = useState({
    amount: "",
    currency: "ETB", // Chapa supports Ethiopian Birr
    email: "",
    firstName: "",
    lastName: "",
    tx_ref: `tx-${Date.now()}`, // Generate a unique transaction reference
  });

  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:4300/pay-chapa", formData,{headers:{token}});
      if (data.success) {
        setPaymentUrl(response.data.paymentUrl); // Redirect user to Chapa payment page
        window.location.href = response.data.paymentUrl; // Open Chapa payment page
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.log("Payment initiation error:", );
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex my-10 m-auto justify-center  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full h-[450px] max-w-sm">
        <h1 className="text-xl text-purple-800 font-semibold text-center mb-2">Make a Payment</h1>
        <form onSubmit={handleSubmit} className="gap-3">
          <div className='flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700">Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="100 ETB"
              className="w-full px-3 py-0.5 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-00">Currency:</label>
            <input
              type="text"
              name="currency"
              value={formData.currency}
              disabled              
              className="w-full text-gray-400 px-3 py-0.5 mt-1 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="khadar@Gmail.com"
              className="w-full px-3 py-0.5 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="khadar"
              className="w-full px-3 py-0.5 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div  className='flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="moha"
              className="w-full px-3 py-0.5 m1-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-6 py-0.5 bg-purple-800 text-white text-lg font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
