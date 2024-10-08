"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if( quantity < 20 ) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if( quantity > 1 ) {
            setQuantity(quantity - 1);
        }
    }

    let btnStyles = "bg-green-600 text-white rounder py-2 px-4 mt-5 mr-3 hover:bg-green-400 active:bg-yellow-300 disabled:bg-gray-500";

    return(
        <div>
            <h2 className="">Increment and Decrement</h2>
            <p>Quantity: {quantity}</p>
            <button className={btnStyles} onClick={ increment } disabled={quantity === 20}>+</button>
            <button className={btnStyles} onClick={ decrement } disabled={quantity === 1}>-</button>
        </div>
    );

}