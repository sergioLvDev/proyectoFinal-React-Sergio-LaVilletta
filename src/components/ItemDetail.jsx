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
      <TituloPagina titulo={"Detalle del Producto"} />
      <div className="flex flex-col items-center justify-center gap-5 p-5 bg-slate-900 sm:flex-row ">
        <img
          src={item.images}
          alt={item.title}
          className="top-0 object-contain rounded-md w-full max-w-[300px]"
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
