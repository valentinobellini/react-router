import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



export default function PostDetail() {

    // destruttura per ritornare l'id (proprietà id dell'oggetto params)
    const { id } = useParams();

    //  setta stato del componente
    const [pizza, setPizza] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPizza() {
        axios.get(`http://localhost:3000/pizzas/${id}`)
            .then(res => setPizza(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPizza(),
        [])


    return (
        <>
            <h2>Ciao sono la pagina di dettaglio della Pizza {pizza.name}</h2>
            <img src={pizza.image} alt={pizza.name} />
            {/* <p>{pizza.ingredients.join(", ")}</p> */}
        </>
    );
}