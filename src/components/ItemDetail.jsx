import { useContext } from "react";
import { miContexto } from "./CartProvider";
import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ item }) {
  const { carritoCant, agregarAlCarrito } = useContext(miContexto);

  const [cantidad, setcantidad] = useState(1);

  const handleClickRestar = () => {
    cantidad > 1 && setcantidad(cantidad - 1);
  };

  const handleClickSumar = () => {
    setcantidad(cantidad + 1);
  };

  return (
    <section className="flex flex-row items-center justify-center w-[50%] gap-8 p-4 mx-auto rounded-sm bg-slate-800 ">
      {item.map((i) => (
        <ItemCount
          item={i}
          key={i.id}
          cantidad={cantidad}
          handleClickSumar={handleClickSumar}
          handleClickRestar={handleClickRestar}
          agregarAlCarrito={() => agregarAlCarrito(item, cantidad)}
        />
      ))}
    </section>
  );
}
export default ItemDetail;
