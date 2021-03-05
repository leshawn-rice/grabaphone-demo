import React, { useState } from 'react';

const ManufacturerForm = ({ sendRequest }) => {
  const INITIAL_DATA = {
    manufacturer: '',
    limit: 1
  }

  const [formData, setFormData] = useState(INITIAL_DATA);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    sendRequest(formData);
    setFormData(INITIAL_DATA);
  }


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="manufacturer">Manufacturer Name: </label>
        <input
          id="manufacturer"
          type="text"
          name="manufacturer"
          onChange={handleChange}
          placeholder="Apple"
          value={formData.manufacturer} />
      </p>
      <p>
        <label htmlFor="limit">Limit: </label>
        <input
          id="limit"
          type="number"
          min={1}
          max={100}
          name="limit"
          onChange={handleChange}
          placeholder={100}
          value={formData.limit} />
      </p>
      <button>Submit</button>
    </form>
  )
}

export default ManufacturerForm;