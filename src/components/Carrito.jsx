import { useContext } from "react";
import { miContexto } from "./CartProvider";
import TituloPagina from "./TituloPagina";

function Carrito() {
  const { carritoCant, precioTotal, vaciarCarrito } = useContext(miContexto);
  const handelVaciar = () => {
    vaciarCarrito([]);
  };
  return (
    <div>
      <TituloPagina Titulo="Carrito" />
      <p className="text-3xl font-bold">Articulos en el carrito</p>
      {carritoCant.map((el) => (
        <div key={el.id} className="flex items-end justify-center gap-8 ">
          <img className="w-32 " src={el.images} alt={el.title} />
          <h2 className="text-3xl font-bold">{el.title}</h2>
          <p>Cantidad : {el.quantity}</p>
          <p>Precio Unitario: ${el.price}</p>
          <p>Cantidad Total: {el.quantity * el.price}</p>
        </div>
      ))}
      <p className="m-10 font-sans text-5xl font-bold text-center text-blue-500">
        Suma Total : ${precioTotal()}
      </p>
      <button
        onClick={handelVaciar}
        className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
      >
        Vaciar
      </button>
    </div>
  );
}
export default Carrito;
