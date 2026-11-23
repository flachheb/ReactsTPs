import { useState } from "react";
import Filter from "./Components/Filter";
import Listing from "./Components/Listing";

export default function Vegitals() {
    const vegitals =  [
        {name: 'Carrot', color: 'Orange', price: 1.5, type: 'légume'},
        {name: 'Broccoli', color: 'Green', price: 2.0, type: 'légume'},
        {name: 'Spinach', color: 'Green', price: 1.0, type: 'légume'},
        {name: 'Tomato', color: 'Red', price: 1.2, type: 'fruit'},
        {name: 'Cucumber', color: 'Green', price: 1.3, type: 'légume'},
        {name: 'Bell Pepper', color: 'Red', price: 1.8, type: 'légume'},
        {name: 'Zucchini', color: 'Green', price: 1.4, type: 'légume'},
        {name: 'Eggplant', color: 'Purple', price: 1.6, type: 'légume'},
        {name: 'Lettuce', color: 'Green', price: 1.1, type: 'fruit'},
        {name: 'Onion', color: 'White', price: 0.8, type: 'fruit'},
        {name: 'Garlic', color: 'White', price: 0.5, type: 'légume'},
        {name: 'Potato', color: 'Brown', price: 0.9, type: 'fruit'},
        {name: 'Sweet Potato', color: 'Orange', price: 1.7, type: 'légume'},
        {name: 'Radish', color: 'Red', price: 1.2, type: 'fruit'},
        {name: 'Beetroot', color: 'Purple', price: 1.5, type: 'légume'},
        {name: 'Cauliflower', color: 'White', price: 2.0, type: 'légume'},
    ];
    let [filtred, setFiltred] = useState(vegitals);

    function search(word) {
        setFiltred(vegitals.filter(
            (v) => v.name.toUpperCase().includes(word.toUpperCase())
        ))
    }

    return (
        <>
            <Filter rechercher={ search } />
            <Listing vegitals={filtred} />
        </>
    )
}