import React from 'react';

const Filter = ({ onChange }) => {
  // Define state for filters here

  const handleFilterChange = (e) => {
    // Update filter state and call onChange
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Search by name" onChange={handleFilterChange} />
      {/* Add more filter inputs for category, company, rating, price, and availability */}
    </div>
  );
};

export default Filter;
