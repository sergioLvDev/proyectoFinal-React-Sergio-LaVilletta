import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";

function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      fetch("https://dummyjson.com/products/" + params.id)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data);
          console.log(data);
        });
    } else {
      fetch("https://dummyjson.com/products/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data);
        });
    }
  }, [params.id]);
  console.log(items);
  return (
    <div>
      <TituloPagina Titulo={"Producto " + params.id} />
      <ItemDetail itemsDe={items} />
    </div>
  );
}

export default ItemDetailContainer;
