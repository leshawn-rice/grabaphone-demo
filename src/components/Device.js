import React from 'react';
import '../styles/Device.css'
import { v4 as uuid } from 'uuid';

const Device = ({ data = { name: undefined } }) => {

  const { manufacturer, image_url, name, rating, release_date, specs } = data;

  let screenSize, price, battery, dimensions;

  try {
    screenSize = specs.Display.filter(spec => spec.name === 'Size:')[0].description;
    price = specs['Buyers information'].filter(spec => spec.name === 'Price:')[0].description;
    battery = specs.Battery.filter(spec => spec.name === 'Capacity:')[0].description;
    dimensions = specs.Design.filter(spec => spec.name === 'Dimensions:')[0].description;
  }
  catch (err) {
    // This device doesn't have this spec
    // ignore it
  }

  const deviceSpecs = [
    { id: uuid(), name: 'Screen Size', value: screenSize },
    { id: uuid(), name: 'Price', value: price },
    { id: uuid(), name: 'Battery Size', value: battery },
    { id: uuid(), name: 'Dimensions', value: dimensions }
  ]


  return (
    <div className="Device">
      <h2>{manufacturer} {name} | {rating}/10</h2>
      <img src={image_url} alt={`${manufacturer} ${name}`} />
      <h3>Released: {release_date}</h3>

      <h1>Specs</h1>
      <div className="specs">
        {deviceSpecs.map(spec => <p key={spec.id}>{spec.name}: {spec.value ? spec.value : `Unavailable!`}</p>)}
      </div>
    </div>
  );
}

export default Device;