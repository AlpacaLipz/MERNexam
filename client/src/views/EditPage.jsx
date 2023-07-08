import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import StoreForm from "../components/StoreForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateStore = () => {
  const [store, setStore] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4200/api/store/${id}`)
    .then((res) => {
      setStore(res.data.store);
      console.log(res.data.StoreList.name);
    });
  }, []);

  const updateStore = (updatedStore) => {
    console.log(updatedStore)
    axios
      .put(`http://localhost:4200/api/store/${id}`, updatedStore)
      .then((res) => {
        nav(`/${id}`);
      })
      .catch((err) => {
        console.log(err);
        const errorRes = err.response.data.error.errors;
        console.log(errorRes);
        setFormErrors(errorRes);
      });
  };

  return (
    <div>
      <h2>Store Finder</h2>
      <p>Edit this store!</p>
      <Link to="/">go back home</Link>

      {store.name && (
        <StoreForm
          formSubmit={updateStore}
          formErrors={formErrors}
          stores={store}
        />
      )}
    </div>
  );
};

export default UpdateStore;
