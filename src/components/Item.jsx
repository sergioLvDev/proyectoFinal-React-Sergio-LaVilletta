import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { miContexto } from "./CartProvider";

function Item({ item }) {
  const valorDelContexto = useContext(miContexto);

  const handleClick = () => {
    valorDelContexto.fn();
  };

  return (
    <div>
      <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
        <img
          src={item.images[0]}
          alt={item.title}
          className="object-contain aspect-square"
        />
        <h2 className="font-bold truncate">{item.title}</h2>
        <p className="text-gray-400">${item.price}</p>
        <div className="flex justify-center">
          <Link to={`/item/${item.id}`}>
            <Button text={"Ver más"} />
          </Link>
          <button
            onClick={handleClick}
            className="text-sm bg-green-500 rounded-md hover:bg-green-600 "
          >
            Agregar al carrito
          </button>
        </div>
      </article>
    </div>
  );
}
export default Item;
