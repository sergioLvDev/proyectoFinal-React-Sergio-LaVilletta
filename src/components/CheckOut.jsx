import { useContext, useState, useEffect } from "react";
import { CartContex } from "./CartContex";
import TituloPagina from "./TituloPagina";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../actions";
import Swal from "sweetalert2";

const CheckOut = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContex);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      pedido: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido);

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
      miForm.reset();
    });
  };

  useEffect(() => {
    if (pedidoId) {
      Swal.fire({
        title: "Gracias por su compra!",
        text: `Tu número de pedido es: ${pedidoId}`,
        icon: "success",
      });
    }
  }, [pedidoId]);

  const vaciar = () => {
    vaciarCarrito();
  };

  return (
    <>
      <div className="m-2 font-[sans-serif] max-w-6xl xl:mx-auto  relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
        <div className="absolute w-20 h-20 bg-blue-400 rounded-full -bottom-6 -left-6"></div>
        <div className="absolute w-20 h-20 bg-blue-400 rounded-full -top-6 -right-6"></div>
        <div className="grid gap-8 px-6 py-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="../imagenesProductos/contacto.jpg"
              alt="contacto img"
              className="w-5/6 shrink-0"
            />
          </div>
          <form
            id="miForm"
            onSubmit={handleSubmit(comprar)}
            className="rounded-tl-3xl rounded-bl-3xl"
            autoComplete="off"
          >
            <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
              Datos del Cliente
            </h2>

            <div className="relative max-w-md mx-auto">
              <label htmlFor="nombre" className="ml-1 text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-1 mb-2 text-sm text-black bg-gray-300 rounded-md required outline-blue-600"
                required
                {...register("nombre")}
              />
              <label htmlFor="email" className="ml-1 text-gray-600">
                Correo Electronico
              </label>
              <input
                type="email"
                className="w-full px-4 py-1 text-sm text-black bg-gray-300 rounded-md required outline-blue-600 "
                required
                {...register("email")}
              />
              <label htmlFor="telefono" className="ml-1 text-gray-600">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full px-4 py-1 text-sm text-black bg-gray-300 rounded-md outline-blue-600 focus-within:bg-transparent "
                required
                {...register("telefono")}
              />
              <label htmlFor="consulta" className="ml-1 text-gray-600">
                Observaciones
              </label>
              <textarea
                name="consulta"
                className="w-full px-4 py-1 mb-2 text-sm text-black bg-gray-300 rounded-md required outline-blue-600 focus-within:bg-transparent "
                type="text"
                id="consulta"
                cols="20"
                rows="6"
                {...register("consulta")}
              ></textarea>

              <button
                type="submit"
                className="text-white w-full relative bg-green-500 hover:bg-green-600 rounded-md text-sm px-6 py-3 !mt-6"
              >
                Finalizar Compra
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CheckOut;
