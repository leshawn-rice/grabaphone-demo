import React, { useState } from 'react';
import DeviceForm from './DeviceForm';
import Device from '../shared-components/Device';
import axios from 'axios';
import '../shared-components/Devices.css'

const GetLatest = ({ apiKey = null }) => {

  const [devices, setDevices] = useState([]);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [error, setError] = useState(null)

  async function sendRequest(formData) {
    setError(error => null)
    const data = {
      key: apiKey,
      name: formData.name,
      manufacturer: formData.manufacturer,
      limit: formData.limit,
      is_released: formData.isReleased
    }
    try {
      const res = await axios.get('https://grabaphone.herokuapp.com/api/get-latest-devices', { params: data });
      setDevices(devices => res.data.Devices);
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
      <h1>Demo of https://grabaphone.herokuapp.com/api/get-latest-devices</h1>

      <DeviceForm sendRequest={sendRequest} />

      <div className="Devices">
        {
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

export default GetLatest;