import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 min-h-screen bg-[#ADEFD1FF]">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#00203FFF]">Shopping List</h1>
      <ItemList/>
    </main>
  );
}