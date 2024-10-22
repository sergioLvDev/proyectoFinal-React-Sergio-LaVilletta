import { Link } from "react-router-dom";
import Button from "./Button";

function Item({ item }) {
  return (
    <div>
      <article className="p-4 text-black transition-all w-full m-auto max-w-[350px] bg-white rounded-md shadow-xl hover:scale-105">
        <img
          src={item.images}
          alt={item.title}
          className="object-contain rounded-md "
        />
        <h2 className="font-bold truncate">{item.title}</h2>
        <p className="text-gray-800">${item.price}</p>
        <p className="text-gray-800">{item.category}</p>
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
