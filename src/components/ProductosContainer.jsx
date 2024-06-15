import { useEffect, useState } from "react";
import Productos from "./Productos";

function ProductosContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductos(data.products);
      });
  }, []);

  return (
    <div className="p-8">
      <Productos productos={productos} />
    </div>
  );
}
export default ProductosContainer;
