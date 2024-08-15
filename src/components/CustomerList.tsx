import React, { useCallback } from 'react';
import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomerId: number;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  const handleSelect = useCallback((customer: Customer) => {
    onSelectCustomer(customer);
  }, [onSelectCustomer]);

  return (
    <div className="h-screen overflow-y-auto w-1/4 bg-gray-100 p-4 custom-scrollbar">
      {customers.map(customer => (
        <div
          key={customer.id}
          onClick={() => handleSelect(customer)}
          className={`p-4 mb-2 cursor-pointer rounded-lg ${selectedCustomerId === customer.id ? 'bg-gray-300 border border-r-gray-500'
            : 'bg-white hover:bg-gray-200'} `}
        >
          <h2 className="text-lg font-bold">{customer.name}</h2>
          <p className="text-sm text-gray-600">{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

CustomerList.displayName = "CustomerList";

export default React.memo(CustomerList);
