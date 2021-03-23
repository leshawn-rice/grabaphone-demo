import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    // Anytime the component mounts, send a GET request to the API 
    // (heroku takes a second to spin up)
    axios.get('https://grabaphone.herokuapp.com');
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="display-4">Welcome</h1>
      </div>
      <div className="row text-center">
        <p className="lead">This is a live demo for how the Grabaphone API might be used.</p>
        <p className="lead">This demo is still a work in progress, but you can see some example responses from the APIs endpoints on their corresponding page.</p>
        <p className="lead">
          You can also view the API <a href="https://grabaphone.herokuapp.com" target="_blank" rel="noreferrer">here</a>,
          or you can look at the source code <a href="https://github.com/leshawn-rice/grabaphone" target="_blank" rel="noreferrer">here</a>
        </p>
      </div>
    </div>
  );
}

export default Home;