import { useContext, useState } from "react";
import { CartContex } from "./CartContex";
import TituloPagina from "./TituloPagina";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../actions";

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
    });
  };
  if (pedidoId) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-3xl font-bold">Gracias por tu compra !!!</h3>
        <p className="text-2xl font-bold">Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  const vaciar = () => {
    vaciarCarrito();
  };

  return (
    <div>
      <TituloPagina titulo={"Finalizar Compra"} />
      <form onSubmit={handleSubmit(comprar)}>
        <div className="flex items-start gap-10 mx-3 mb-5 ">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="nombre">Nombre</label>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="telefono">Teléfono</label>
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" required {...register("nombre")} />
            <input type="email" required {...register("email")} />
            <input type="tel" required {...register("telefono")} />
          </div>
        </div>
        <Button text="Comprar" type="submit" />
      </form>
    </div>
  );
};
export default CheckOut;
