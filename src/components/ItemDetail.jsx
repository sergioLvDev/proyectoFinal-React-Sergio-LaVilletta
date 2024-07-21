import { useContext } from "react";
import { miContexto } from "./CartProvider";
import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ itemsDe }) {
  const { carritoCant, agregarAlCarrito } = useContext(miContexto);

  const [cantidad, setcantidad] = useState(1);

  const handleClickRestar = () => {
    cantidad > 1 && setcantidad(cantidad - 1);
  };

  const handleClickSumar = () => {
    cantidad < itemsDe.stock && setcantidad(cantidad + 1);
  };
  console.log(itemsDe);
  return (
    <section className="flex flex-row items-center justify-center w-[50%] gap-8 p-4 mx-auto rounded-sm bg-slate-800 ">
      <div>
        <img
          src={itemsDe.images}
          alt={itemsDe.title}
          className="object-contain w-[700px] aspect-square"
        />
      </div>
      <div className="flex flex-col gap-8 text-start">
        <h2 className="p-2 font-bold underline uppercase truncate">
          {itemsDe.title}
        </h2>
        <p className="text-gray-400">Descripcion: {itemsDe.description}</p>
        <p className="text-gray-400">Stock: {itemsDe.stock}</p>
        <p className="text-gray-400">${itemsDe.price}</p>
        <ItemCount
          cantidad={cantidad}
          handleClickSumar={handleClickSumar}
          handleClickRestar={handleClickRestar}
          agregarAlCarrito={() => agregarAlCarrito(itemsDe, cantidad)}
        />
      </div>
    </section>
  );
}
export default ItemDetail;
