"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleItemNameChange = (event) => {
        console.dir(event.target.value);
        setName(event.target.value);
    }
    const handleCategoryChange = (event) => setCategory(event.target.value);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);

        let itemObject = {
            iName: name,
            iQuan: quantity,
            iCate: category
        }

        console.log(itemObject);

        alert(`
            Item Name: ${itemObject.iName}
            Quantity: ${itemObject.iQuan}
            Category: ${itemObject.iCate}
            Item Added.
        `);

        setName("");
        setQuantity(1);
        setCategory("produce");

    }

    let btnStyles = "bg-green-600 text-white rounder py-2 px-4 mt-5 mr-3 hover:bg-green-400 active:bg-yellow-300 disabled:bg-gray-500";

    return(
        <form onSubmit={handleSubmit} className="p-5 bg-blue-600">
            <div className="mb-3">
                <label className="inline-block w-40">Item Name:</label>
                <input
                    type="text"
                    onChange={handleItemNameChange}
                    value={name}
                    className="px-2 py-0.5 rounded bg-indigo-500 focus:bg-indigo-400 border border-sky-700"
                required />
            </div>

            <div className="mb-3">
                <h2 className="inline-block w-40">Increment and Decrement</h2>
                <p>Quantity: {quantity}</p>
                <button className={btnStyles} onClick={ increment } disabled={quantity === 20}>+</button>
                <button className={btnStyles} onClick={ decrement } disabled={quantity === 1}>-</button>
            </div>

            <div className="mb-3">
                <label className="inline-block w-40">Category Type:</label>
                <select onChange={handleCategoryChange} value={category} className="px-2 py-0.5 rounded bg-indigo-500 focus:bg-indigo-400 border border-sky-700">
                    <option selected disabled value="">-- Please choose a category --</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-3">
                <button className={btnStyles} type="submit">Submit Item</button>
            </div>
        </form>
    );

}