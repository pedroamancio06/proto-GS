import React, { useState } from 'react';
import '../styles/AddResidue.css';

function AddResidue() {
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newResidue = { location, quantity: parseInt(quantity) };
  };

  return (
    <div className="add-residue">
      <h1>Add New Residue</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" id='btn-add'>Add Residue</button>
      </form>
    </div>
  );
};

export default AddResidue;