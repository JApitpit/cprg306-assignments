"use client";
import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-lg bg-[#00213e] shadow-md">
      <h1 className="text-xl text-[#acedcf] text-[30px] font-bold mb-4">Meal Ideas for {ingredient}</h1>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-4">
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} className="rounded-lg" />
            <p className="text-[#acedcf]">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}