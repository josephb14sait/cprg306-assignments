"use client"

import { useState } from "react";
import { useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMealIdeas = async () => {
            if (ingredient) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMeals(data.meals || []);
            }
        };
        fetchMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-4">
                        <h3 className="font-semibold">{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} className="w-full h-32 object-cover" />
                    </li>
                ))}
            </ul>
        </div>
    );

}