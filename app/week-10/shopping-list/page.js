"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user, router]);

  async function loadItems() {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  }

  async function handleAddItem(newItem) {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
    }
  }

  const handleItemSelect = (name) => {
    const cleanedName = name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

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
