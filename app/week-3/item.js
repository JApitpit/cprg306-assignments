
export default function Item({ name, quantity, category }) {
    return (
        <ul className="justify-center">
            <li className="p-2 border-b flex rounded-lg bg-[#00203FFF] shadow-md border-[#00203FFF] m-4 flex-col text-center hover:bg-[#00123f]">
                <p className="font-semibold text-[#ADEFD1FF]">{name}</p>
                <p className="text-[#ADEFD1FF]">buy {quantity} in {category}</p>
            </li>
        </ul>
    );
  }