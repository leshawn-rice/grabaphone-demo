import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import useAPIKey from './hooks/useAPIKey';
import Navbar from './Navbar';
import Home from './components/Home';
import GetDevices from './components/GetDevices';
import GetLatest from './components/GetLatest';
import GetManufacturers from './components/GetManufacturers'
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
