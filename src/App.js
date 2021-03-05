import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import useAPIKey from './hooks/useAPIKey';
import Navbar from './Navbar';
import Home from './home/Home';
import GetDevices from './get-devices/GetDevices';
import GetLatest from './get-latest/GetLatest';
import GetManufacturers from './get-manufacturers/GetManufacturers'
import './App.css'

function App() {
  const [key, createKey] = useAPIKey();

  useEffect(() => {
    if (key === null) {
      createKey()
    }
  });


  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/get-devices">
        <GetDevices apiKey={key} />
      </Route>
      <Route exact path="/get-latest">
        <GetLatest apiKey={key} />
      </Route>
      <Route exact path="/get-manufacturers">
        <GetManufacturers apiKey={key} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
