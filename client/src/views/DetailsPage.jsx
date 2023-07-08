import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const DetailsPage = () => {
    const [store, setStore] = useState([]);
    const { id } = useParams();
    console.log(store)


    useEffect(() => {
        axios.get(`http://localhost:4200/api/store/${id}`)
        .then((res) => {
            console.log(res.data)
            console.log(res.data.store);
            setStore(res.data.store);
        })
        .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h1>Store Finder</h1>

                {store && (
                    <div className="black">
                        <p>{store.name}</p>
                        <p>{store.number}</p>
                        <p>{store.isOpen ? 'Yes' : 'No'}</p>
                    </div>
                )}
                <Link to={`/edit/${id}`}> <button>Edit Store Details</button></Link>
        </div>
    );
};

export default DetailsPage;