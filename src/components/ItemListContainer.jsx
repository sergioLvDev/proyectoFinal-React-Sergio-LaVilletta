import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetch("https://dummyjson.com/products/category/" + params.id)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data.products);
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
      <TituloPagina Titulo={"Productos"} />
      <ItemList items1={items} />
    </div>
  );
}

export default ItemListContainer;
