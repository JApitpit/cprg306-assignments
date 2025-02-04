import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 min-h-screen bg-[#00203FFF]">
      <h1 className="text-3xl font-bold text-center mb-4">Shopping List</h1>
      <ItemList/>
    </main>
  );
}