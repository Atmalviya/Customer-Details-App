import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
  selectedCustomerId: number;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelect, selectedCustomerId }) => {
  return (
    <div className="w-1/3 h-full bg-gray-100 p-4 overflow-y-auto custom-scrollbar">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`p-4 mb-4 rounded-lg cursor-pointer transition-colors 
            ${
              selectedCustomerId === customer.id
                ? 'bg-gray-300 border border-r-gray-500'
                : 'bg-white hover:bg-gray-200'
            }`}
          onClick={() => onSelect(customer)}
        >
          <h4 className="font-semibold">{customer.name}</h4>
          <p className="text-gray-600">{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
