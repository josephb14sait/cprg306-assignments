"use client"

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return(
        <main className="p-5">
            <h1 className="font-bold text-2xl mb-5">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />

        </main>
    );
}