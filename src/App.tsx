import React, { useState } from 'react';
import { Customer } from './types';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

const customers: Customer[] = [
  { id: 1, name: 'Customer 01', title: 'CEO', address: '123 Main St, Anytown, USA' },
  { id: 2, name: 'Customer 02', title: 'CTO', address: '456 Elm St, Othertown, USA' },
  { id: 3, name: 'Customer 03', title: 'CFO', address: '789 Oak St, Sometown, USA' },
  { id: 4, name: 'Customer 04', title: 'Title 04', address: '1122 Birch St' },
  { id: 5, name: 'Customer 05', title: 'Title 05', address: '1234 Elm St' },
  { id: 6, name: 'Customer 06', title: 'Title 06', address: '5678 Oak St' },
  { id: 7, name: 'Customer 07', title: 'Title 07', address: '9101 Maple St' },
  { id: 8, name: 'Customer 08', title: 'Title 08', address: '1122 Birch St' },
  { id: 9, name: 'Customer 09', title: 'Title 09', address: '1234 Elm St' },
  { id: 10, name: 'Customer 10', title: 'Title 10', address: '5678 Oak St' },
  { id: 11, name: 'Customer 11', title: 'Title 11', address: '9101 Maple St' },
  { id: 12, name: 'Customer 12', title: 'Title 12', address: '1122 Birch St' },
];

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="flex">
      <CustomerList 
        customers={customers} 
        onSelectCustomer={handleSelectCustomer} 
        selectedCustomerId={selectedCustomer ? selectedCustomer.id : -1}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

App.displayName = "App";

export default App;
