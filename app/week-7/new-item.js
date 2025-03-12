"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim()) return; // Prevent adding empty items

        const item = {
            id: crypto.randomUUID(), // Generate a unique ID
            name,
            quantity,
            category,
        };

        onAddItem(item); // Pass the new item to the parent component
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl text-black font-bold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-black font-semibold">Item Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border text-black rounded-md"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button type="button" onClick={decrement} disabled={quantity === 1}
                        className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50">
                        -
                    </button>

                    <span className="text-lg text-black font-medium">{quantity}</span>

                    <button type="button" onClick={increment} disabled={quantity === 20}
                        className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50">
                        +
                    </button>
                </div>

                <div>
                    <label className="block text-black font-semibold">Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border text-black rounded-md">
                        {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
                            <option key={cat.toLowerCase()} value={cat.toLowerCase()}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Add Item
                </button>
            </form>
        </div>
    );
}
