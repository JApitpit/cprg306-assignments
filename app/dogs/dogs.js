

export default function Dogs({name, dog, img}) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-orange-400">{name}</h2>
            <h3 className="text-orange-400">{dog}</h3>
            <img className="w-60" src={img}></img>
        </div>
    );
}