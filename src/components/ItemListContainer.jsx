import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(greeting) {
  const [items, setItems] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.products);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="p-6 mb-8 font-bold text-center bg-cyan-950 text-1xl">
        {greeting.soyUnAtributo}
      </h2>
      <h3>Todas las categorias</h3>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
