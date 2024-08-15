import React from 'react';
import { Customer } from '../types';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="w-3/4 p-4">Please select a customer to view details.</div>;
  }

  return (
    <div className="w-3/4 p-4 custom-scrollbar">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">{customer.name}</h1>
      <h2 className="text-xl mb-4">{customer.title}</h2>
      <p className="mb-4">{customer.address}</p>
      </div>
      <PhotoGrid />
    </div>
  );
};

CustomerDetails.displayName = "CustomerDetails";

export default React.memo(CustomerDetails);
