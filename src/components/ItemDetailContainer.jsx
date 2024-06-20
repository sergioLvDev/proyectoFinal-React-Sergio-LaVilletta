import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";

function ItemDetailContainer() {
  const [items, setItems] = useState({});
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetch("https://dummyjson.com/products/" + params.id)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data);
        });
    } else {
      fetch("https://dummyjson.com/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data.products);
        });
    }
  }, [params.id]);

  return (
    <div>
      <TituloPagina Titulo={"Producto " + params.id} />
      <ItemDetail items={items} />
    </div>
  );
}

export default ItemDetailContainer;
