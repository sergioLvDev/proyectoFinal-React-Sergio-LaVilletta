import { useContext, useState, useEffect } from "react";
import { CartContex } from "./CartContex";
import TituloPagina from "./TituloPagina";
import { useForm } from "react-hook-form";
import Button from "./Button";
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
    console.log(pedido);

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
    <div>
      <TituloPagina titulo={"Contacto"} />
      <form id="miForm" onSubmit={handleSubmit(comprar)}>
        <div className="flex items-start gap-10 mx-3 mb-5 ">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="nombre">Nombre</label>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="telefono">Teléfono</label>
            <label htmlFor="consulta">Consulta</label>
          </div>
          <div className="flex flex-col gap-2 ">
            <input
              type="text"
              className="w-[400px] max-[550px]:w-[200px] rounded-sm"
              required
              {...register("nombre")}
            />
            <input
              type="email"
              className="w-[400px] max-[550px]:w-[200px] rounded-sm"
              required
              {...register("email")}
            />
            <input
              type="tel"
              className="w-[400px] max-[550px]:w-[200px] rounded-sm"
              required
              {...register("telefono")}
            />
            <textarea
              name="consulta"
              className="w-[400px] max-[550px]:w-[200px] rounded-sm"
              type="text"
              id="consulta"
              cols="30"
              rows="10"
              placeholder="Escriba su consulta"
              {...register("consulta")}
            ></textarea>
          </div>
        </div>
        <br />

        <Button text="Enviar Consultar" type="submit" />
        <button
          type="submit"
          className="inline px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-green-500 rounded-lg hover:bg-green-400"
        >
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};
export default CheckOut;
