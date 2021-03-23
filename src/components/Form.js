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
    <div className="row justify-content-center">
      <div className="col-6">
        <form className="" onSubmit={handleSubmit}>
          {inputs.map(input => (
            <div key={`${input.name}-${input.type}`} className='form-group my-2'>
              <label className={input.type !== 'checkbox' ? "form-label" : 'form-check-label'} htmlFor={input.name}>{input.label}</label>
              <input
                className={input.type !== 'checkbox' ? "form-control" : "form-check-input mx-2"}
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
          <div className="text-center">
            <button className="btn btn-outline-dark my-2 ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Form;