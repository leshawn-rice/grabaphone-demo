import React, { useState } from 'react';
import Form from './Form';
import Manufacturer from './Manufacturer';
import axios from 'axios';
import '../styles/Manufacturers.css'

const GetManufacturers = ({ apiKey = null }) => {

  const [manufacturers, setManufacturers] = useState([]);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  async function sendRequest(formData) {
    setError(error => null);
    const data = {
      key: apiKey,
      manufacturer: formData.manufacturer,
      limit: formData.limit
    }
    try {
      setIsRequestSent(true);
      setIsLoading(true);
      const res = await axios.get('https://grabaphone.herokuapp.com/api/get-manufacturers', { params: data });
      setManufacturers(manufacturers => res.data.Manufacturers);
      setIsLoading(false);
    }
    catch (err) {
      const message = err.response.data.message;
      setError(error => message);
      setIsLoading(false);
    }
  }

  const inputs = [
    { name: 'manufacturer', type: 'text', placeholder: 'Apple', label: 'Manufacturer Name' },
    { name: 'offset', type: 'number', min: 0, placeholder: 0, label: 'Offset' },
    { name: 'limit', type: 'number', min: 1, max: 100, placeholder: 100, label: 'Limit' }
  ];

  const INITIAL_FORM_DATA = {
    manufacturer: '',
    offset: undefined,
    limit: undefined
  }

  return (
    <>
      <Form inputs={inputs} INITIAL_DATA={INITIAL_FORM_DATA} sendRequest={sendRequest} />

      <div className="Manufacturers">
        {
          isLoading ?
            <h1>Loading...</h1> :
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
  )
}

export default GetManufacturers;