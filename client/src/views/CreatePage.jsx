import React, {useState} from  'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import StoreForm from '../components/StoreForm';



const CreatePage = () => {
  const nav = useNavigate();
  const [formErrors, setFormErrors] = useState();
  
  const formSubmit = (stores) => {
    axios
    .post('http://localhost:4200/api/store', stores)
    .then((res) => {
        console.log(res.data.store._id)
        nav(`/${res.data.store._id}`)
    })
    .catch((err) => {
        console.log(err)
        const errorArr = Object.values(err.response.data.error.errors);
        setFormErrors(errorArr.map(err => err.message));
    });
  };


  return (
    <div>
      <h2>Store Finder</h2>
      <p>Add a new store!</p>
      <Link to="/">go back home</Link>  
      <StoreForm stores={{name : '', number : '', isOpen: true}} 
      formSubmit={formSubmit}
      formErrors={formErrors}
      />
    </div>
  );
};

export default CreatePage;