import React, { useState } from 'react';
import ManufacturerForm from './ManufacturerForm';
import Manufacturer from '../shared-components/Manufacturer';
import axios from 'axios';
import '../shared-components/Manufacturers.css'

const GetManufacturers = ({ apiKey = null }) => {

  const [manufacturers, setManufacturers] = useState([]);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [error, setError] = useState(null)

  async function sendRequest(formData) {
    setError(error => null);
    const data = {
      key: apiKey,
      manufacturer: formData.manufacturer,
      limit: formData.limit
    }
    try {
      const res = await axios.get('https://grabaphone.herokuapp.com/api/get-manufacturers', { params: data });
      setManufacturers(manufacturers => res.data.Manufacturers);
      setIsRequestSent(true);
    }
    catch (err) {
      const message = err.response.data.message;
      setError(error => message);
      setIsRequestSent(true);
    }
  }

  return (
    <>
      <h1>Demo of https://grabaphone.herokuapp.com/api/get-manufacturers</h1>

      <ManufacturerForm sendRequest={sendRequest} />

      <div className="Manufacturers">
        {
          // If there are no manufacturers, display appropriate message, otherwise display devices
          manufacturers.length > 0 ?
            manufacturers.map(manuf => <Manufacturer key={manuf.id} data={manuf} />) :
            // If a request has been sent, and no error was received, show no manufacturers found
            // otherwise show error
            isRequestSent === true ?
              error === null ?
                <h1>NO MANUFACTURERS FOUND</h1> :
                <h1>{error}</h1> :
              // if no request has been sent, show nothing
              ''}
      </div>
    </>
  );
}

export default GetManufacturers;