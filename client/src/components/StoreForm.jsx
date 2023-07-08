import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';


const AuthForm = ({ stores, formSubmit, formErrors }) => {
  console.log('========= ', formErrors)
  const [name, setName] = useState(stores.name);
  const [number, setNumber] = useState(stores.number);
  const [isOpen, setIsOpen] = useState(stores.isOpen);
  const {id} = useParams();
  console.log(id)
// console.log({formErrors})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    formSubmit({
      name,
      number,
      isOpen,
    });
  };
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div><label>Name: </label><input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /></div>
      
      <div>
      <label>Number: </label>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      </div>
      <div>
      <label>is Open?</label>
        <input checked={isOpen} type="checkbox" onChange={(e) => setIsOpen(e.target.checked)}/>
        </div>
      { formErrors && formErrors.map((err, index) => <p className="error" key={index}>{err}</p>) }
      <button className="marTop">Submit</button>
    </form>
    </div>
  );
};

export default AuthForm;