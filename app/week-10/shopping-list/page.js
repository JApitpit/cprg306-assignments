"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const handleItemSelect = (name) => {
    const cleanedName = name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <main className="p-6 min-h-screen bg-[#ADEFD1FF]">
      <button onClick={firebaseSignOut} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
        Logout
      </button>
      <h1 className="text-3xl font-bold text-center mb-4 text-[#00203FFF]">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
    </main>
  );
}