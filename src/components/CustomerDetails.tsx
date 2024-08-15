import React from "react";
import PhotoGrid from "./PhotoGrid";

interface CustomerDetailsProps {
  customer: {
    name: string;
    title: string;
    address: string;
  };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="w-2/3 h-full p-8 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">{customer.name}</h2>
        <p className="text-lg text-gray-700 mb-2">{customer.title}</p>
        <p className="text-gray-600 mb-6">{customer.address}</p>
      </div>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
