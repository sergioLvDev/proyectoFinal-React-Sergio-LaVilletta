import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import TituloPagina from "./TituloPagina";
import { getProducts, getProductsByCategory } from "../actions";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getProductsByCategory(params.id).then((res) => {
        setTitulo(params.id);
        setTimeout(() => {
          setItems(res);
          setLoading(false);
        }, 100);
      });
    } else {
      getProducts().then((res) => {
        setTitulo("Todos los Productos");
        setTimeout(() => {
          setItems(res);
          setLoading(false);
        }, 100);
      });
    }
    setLoading(true);
  }, [params.id]);

  return (
    <div>
      <TituloPagina titulo={titulo} />
      {loading ? (
        <img
          src="../spinner.gif"
          alt="imagen de spinner"
          className="w-20 m-auto rounded-full"
        />
      ) : (
        <ItemList items1={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
