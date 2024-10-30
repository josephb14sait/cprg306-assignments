"use client"

import { useState } from "react";
import ItemComp from "./item";

export default function ItemList({ items }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      const valueA = a[sortBy].toUpperCase();
      const valueB = b[sortBy].toUpperCase();
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
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
        {sortedItems.map((item) => (
          <li key={item.id}>
            <ItemComp iName={item.name} iQuantity={item.quantity} iCategory={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );

}
