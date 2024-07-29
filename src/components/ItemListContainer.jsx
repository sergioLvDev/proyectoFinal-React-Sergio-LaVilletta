import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";
import { getProducts, getProductsByCategory } from "../actions";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getProductsByCategory(params.id).then((res) => {
        setItems(res);
        setTitulo(params.id);
      });
    } else {
      getProducts().then((res) => {
        setItems(res);
        setTitulo("Todos los Productos");
      });
    }
  }, [params.id, titulo]);

  return (
    <div>
      <TituloPagina titulo={titulo} />
      <ItemList items1={items} />
    </div>
  );
}

export default ItemListContainer;
