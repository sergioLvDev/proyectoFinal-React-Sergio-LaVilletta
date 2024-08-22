import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContex } from "./CartContex";
import TituloPagina from "./TituloPagina";

const ItemDetail = ({ item }) => {
  const { agregarCarrito } = useContext(CartContex);

  const [cantidad, setCantidad] = useState(1);

  const handelRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handelSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <>
      <TituloPagina titulo={"Item Detail"} />
      <div className="flex items-center justify-center bg-slate-900 p-5 gap-5 max-[680px]:flex-col">
        <img
          src={item.images}
          alt={item.title}
          className="top-0 rounded-md w-80 max-[680px]:w-full"
        />
        <div>
          <h3>{item.title}</h3>
          <p>Descripcion:{item.description}</p>
          <p>${item.price}</p>
          <p>Stock: {item.stock}</p>
          <p>Categoria: {item.category}</p>
          <ItemCount
            cantidad={cantidad}
            handelRestar={handelRestar}
            handelSumar={handelSumar}
            handelAgregarCarrito={() => {
              agregarCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
