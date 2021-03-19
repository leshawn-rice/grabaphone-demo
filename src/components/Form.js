import React, { useState } from "react";
import '../styles/Form.css'

const Form = ({ inputs, INITIAL_DATA, sendRequest }) => {
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
    <form className="Form" onSubmit={handleSubmit}>
      {inputs.map(input => (
        <div className='Form-Group'>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            id={input.name}
            type={input.type}
            min={input.min}
            max={input.max}
            name={input.name}
            onChange={handleChange}
            placeholder={input.placeholder}
            value={formData[input.name]} />
        </div>
      ))}

      <button className="Form-Btn">Submit</button>
    </form>
  )

}

export default Form;