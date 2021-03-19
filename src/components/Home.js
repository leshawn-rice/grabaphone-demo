import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    // Anytime the component mounts, send a GET request to the API 
    // (heroku takes a second to spin up)
    axios.get('https://grabaphone.herokuapp.com');
  }, []);

  return (
    <>
      <h1>Hello There!</h1>
    </>
  );
}

export default Home;