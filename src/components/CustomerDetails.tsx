import React from 'react';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: {
    name: string;
    title: string;
    address: string;
  };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
