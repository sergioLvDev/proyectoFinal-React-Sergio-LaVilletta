import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../actions";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const id = useParams().id;

  useEffect(() => {
    getProductsById(id).then((res) => setItem(res));
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
