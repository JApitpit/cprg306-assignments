"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
  
    const increment = () => {
      if (quantity < 20) setQuantity(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

  return (
    <div className="p-4 border rounded-lg shadow-md w-64 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">New Item</h2>
      <div className="flex items-center gap-4">
        <button onClick={decrement} disabled={quantity === 1} 
          className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50">
          -
        </button>
        
        <span className="text-lg font-medium">{quantity}</span>

        <button onClick={increment} disabled={quantity === 20} 
          className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50">
          +
        </button>
      </div>
    </div>
  );
}