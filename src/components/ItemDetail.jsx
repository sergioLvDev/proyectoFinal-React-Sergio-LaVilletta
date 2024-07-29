import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContex } from "./CartContex";

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
    <div className="flex items-center justify-center gap-5">
      <img src={item.images} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Descricion:{item.description}</p>
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
  );
};
export default ItemDetail;
