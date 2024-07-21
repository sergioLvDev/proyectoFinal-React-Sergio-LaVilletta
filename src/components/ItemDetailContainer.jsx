import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";
import { getProductsById } from "../actions";
import { getProducts } from "../actions";

function ItemDetailContainer() {
  const [items, setItems] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getProductsById(params.id).then((res) => {
        console.log(res);
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
      <TituloPagina Titulo={"Producto " + params.id} />
      <ItemDetail itemsDe={items} />
    </div>
  );
}

export default ItemDetailContainer;
