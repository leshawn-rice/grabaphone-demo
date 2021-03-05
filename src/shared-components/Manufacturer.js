import React from 'react';
import './Manufacturers.css'

const Manufacturer = ({ data = { name: undefined } }) => {

  const { name } = data;

  return (
    <div className="Manufacturer">
      <h2>{name}</h2>
    </div>
  );
}

export default Manufacturer;