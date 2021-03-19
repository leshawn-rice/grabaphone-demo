import React, { useState } from 'react';
import Form from './Form';
import Device from './Device';
import axios from 'axios';
import '../styles/Devices.css'

const GetDevices = ({ apiKey = null }) => {
  const [devices, setDevices] = useState([]);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(formData) {
    setError(error => null)
    const data = {
      key: apiKey,
      name: formData.name,
      manufacturer: formData.manufacturer,
      limit: formData.limit
    }
    try {
      setIsRequestSent(true);
      setIsLoading(true);
      const res = await axios.get('https://grabaphone.herokuapp.com/api/get-devices', { params: data });
      setDevices(devices => res.data.Devices);
      setIsLoading(false);
    }
    catch (err) {
      const message = err.response.data.message;
      setError(error => message);
      setIsLoading(false);
    }
  }

  const inputs = [
    { name: 'name', type: 'text', placeholder: 'iPhone', label: 'Device Name: ' },
    { name: 'manufacturer', type: 'text', placeholder: 'Apple', label: 'Manufacturer Name: ' },
    { name: 'limit', type: 'number', min: 1, max: 100, placeholder: 100, label: 'Limit: ' }
  ];

  const INITIAL_FORM_DATA = {
    name: '',
    manufacturer: '',
    limit: 100
  }

  return (
    <>
      <h1>Demo of https://grabaphone.herokuapp.com/api/get-devices</h1>

      <Form inputs={inputs} INITIAL_DATA={INITIAL_FORM_DATA} sendRequest={sendRequest} />

      <div className="Devices">
        {
          isLoading ?
            <h1>Loading...</h1> :
            // If there are no devices, display appropriate message, otherwise display devices
            devices.length > 0 ?
              devices.map(device => <Device key={device.id} data={device} />) :
              // If a request has been sent, and no error was received, show no devices found
              // otherwise show the error
              isRequestSent === true ?
                error === null ?
                  <h1>NO DEVICES FOUND!</h1> :
                  <h1>{error}</h1> :
                // if no request has been sent, show nothing
                ''}
      </div>
    </>
  );
}

export default GetDevices;