"use client"

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        const cleanItemName = item.name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
        setSelectedItemName(cleanItemName);
    };

    return(
        <main className="p-5">
            <div>
                <h1 className="font-bold text-2xl mb-5">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 ml-5">
                <MealIdeas ingredient={selectedItemName} />
            </div>

        </main>
    );
}