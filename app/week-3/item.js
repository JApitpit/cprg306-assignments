
export default function Item({ name, quantity, category }) {
    return (
        <ul className="justify-center">
            <li className="p-2 border-b flex rounded-lg bg-[#00203FFF] shadow-md border-8 border-[#00203FFF] m-4 flex-col text-center">
                <h className="font-semibold text-[#ADEFD1FF]">{name}</h>
                <h className="text-[#ADEFD1FF]">buy {quantity} in {category}</h>
            </li>
        </ul>
    );
  }