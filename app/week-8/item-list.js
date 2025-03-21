"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <main>
      <div className="flex gap-2 my-4">
        <button onClick={() => setSortBy('name')}
          className={`px-4 rounded-lg ${sortBy === 'name' ? 'bg-[#01213f]' : 'bg-[#01213f90]'}`}>
          Sort by Name
        </button>

        <button onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded-lg ${sortBy === 'category' ? 'bg-[#01213f]' : 'bg-[#01213f90]'}`}>
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </main>
  );
}