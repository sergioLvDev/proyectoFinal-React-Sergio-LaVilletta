import { useContext } from "react";
import TituloPagina from "./TituloPagina";
import { CartContex } from "./CartContex";
import { Link } from "react-router-dom";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContex);
  const handelVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="pb-5">
      <TituloPagina titulo={"Carrito"} />
      {carrito.map((el) => (
        <div
          key={el.id}
          className="flex gap-8 p-5 bg-slate-900 max-[450px]:flex-col "
        >
          <img
            className="w-32 max-[680px]:object-contain rounded-sm"
            src={el.images}
            alt={el.title}
          />
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold">{el.title}</h3>
            <p>Cantidad : {el.cantidad}</p>
            <p>Precio Unitario: ${el.price}</p>
            <p>Precio Total:$ {el.cantidad * el.price}</p>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-20">
          <p className="m-10 font-sans text-5xl font-bold text-center text-blue-200">
            Suma Total : ${precioTotal()}
          </p>
          <div>
            <button
              onClick={handelVaciar}
              className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
            >
              Vaciar
            </button>
            <Link
              className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-green-500 rounded-lg hover:bg-cyan-800"
              to="/checkout"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-3xl font-bold">No hay elementos en el carrito 😒</p>
      )}
    </div>
  );
}
export default Carrito;
