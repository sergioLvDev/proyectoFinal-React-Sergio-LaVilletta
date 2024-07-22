import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";
import { getProducts, getProductsByCategory } from "../actions";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getProductsByCategory(params.id).then((res) => {
        setItems(res);
      });
    } else {
      getProducts().then((res) => {
        setItems(res);
      });
    }
  }, [params.id]);

  return (
    <div>
      <TituloPagina Titulo={"Productos"} />
      <ItemList items1={items} />
    </div>
  );
}

export default ItemListContainer;
