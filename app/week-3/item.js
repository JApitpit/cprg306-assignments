
export default function Item({ name, quantity, category }) {
    return (
        <ul>
            <li className="p-2 border-b flex rounded-lg bg-[#ADEFD1FF] shadow-md border-8 border-[#ADEFD1FF]">
                <h className="font-semibold text-[#00203FFF]">{name}</h>
                <h className="text-[#00203FFF]">buy {quantity} in {category}</h>
            </li>
        </ul>
    );
  }