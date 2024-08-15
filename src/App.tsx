import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = [
    { id: 1, name: "Customer 01", title: "Title 01", address: "1234 Elm St" },
    { id: 2, name: "Customer 02", title: "Title 02", address: "5678 Oak St" },
    { id: 3, name: "Customer 03", title: "Title 03", address: "9101 Maple St" },
    { id: 4, name: "Customer 04", title: "Title 04", address: "1122 Birch St" },
    // Add more customers as needed
  ];

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        onSelect={(customer) => setSelectedCustomer(customer)}
        selectedCustomerId={selectedCustomer?.id}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
