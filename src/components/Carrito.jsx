import { useContext } from "react";
import TituloPagina from "./TituloPagina";
import { CartContex } from "./CartContex";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContex);
  const handelVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div>
      <TituloPagina titulo={"Carrito"} />
      {carrito.map((el) => (
        <div key={el.id} className="flex items-end justify-center gap-8 ">
          <img className="w-32 " src={el.images} alt={el.title} />
          <h3 className="text-3xl font-bold">{el.title}</h3>
          <p>Cantidad : {el.cantidad}</p>
          <p>Precio Unitario: ${el.price}</p>
          <p>Cantidad Total: {el.cantidad * el.price}</p>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <p className="m-10 font-sans text-5xl font-bold text-center text-blue-500">
            Suma Total : ${precioTotal()}
          </p>
          <button
            onClick={handelVaciar}
            className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
          >
            Vaciar
          </button>
        </>
      ) : (
        <p className="text-3xl font-bold">No hay elementos en el carrito 😒</p>
      )}
    </div>
  );
}
export default Carrito;
