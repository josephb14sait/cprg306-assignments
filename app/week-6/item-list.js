"use client"

import { useState } from "react";

import ItemComp from "./item";

import items from "./items.json";

export default function ItemList({ Item }) {

  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      if (sortBy === "name") {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
      else if (sortBy === "category") {
        const categoryA = a.category.toUpperCase();
        const categoryB = b.category.toUpperCase();
        if (categoryA < categoryB) return -1;
        if (categoryA > categoryB) return 1;
        return 0;
      }
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <h1>Sort By:</h1>
        <button
          onClick={() => setSortBy("name")}
          className={`p-2 mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-blue-600"}`}
        >Name</button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-blue-600"}`}
        >Category</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ItemComp iName={item.name} iQuantity={item.quantity} iCategory={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );

}
