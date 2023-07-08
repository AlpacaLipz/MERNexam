import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [storeList, setStoreList] = useState([]);

  console.log(storeList)
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/store")
      .then((res) => {
        console.log(res)
        console.log(res.data.StoreList);
        setStoreList(res.data.StoreList);
      })
      .catch((err) => console.log(err));
    console.log(storeList);
  }, []);

  const deleteStore = (storeToDelete) => {
    axios
      .delete(`http://localhost:4200/api/store/${storeToDelete._id}`)
      .then((res) => {
        console.log(res.data);
        setStoreList(
          storeList.filter((store) => store._id !== storeToDelete._id)
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Store Finder</h2>
      <p>Find Stores in your area!</p>
    <table className="center">
        <thead>
            <tr>
                <th>Stores</th>
                <th>Store Number</th>
                <th>Open</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
        {storeList &&
            storeList.map((stores, idx) => (
            <tr key={idx}>
                <td> {stores.name} </td>
                <td> {stores.number} </td>
                <td> {stores.isOpen ? 'Yes' : 'No'} </td>
                <td>
                    <button onClick={() => deleteStore(stores)}> Delete </button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    <Link to="/new">Cant find your store?</Link>
    </div>
  );
};

export default Dashboard;
