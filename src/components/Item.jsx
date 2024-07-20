import { Link } from "react-router-dom";
import Button from "./Button";

function Item({ item }) {
  return (
    <div>
      <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
        <img
          src={item.images}
          alt={item.title}
          className="object-contain aspect-square"
        />
        <h2 className="font-bold truncate">{item.title}</h2>
        <p className="text-gray-400">${item.price}</p>
        <div className="flex justify-center">
          <Link to={`/item/${item.id}`}>
            <Button text={"Ver más"} />
          </Link>
        </div>
      </article>
    </div>
  );
}
export default Item;
