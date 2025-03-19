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
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}