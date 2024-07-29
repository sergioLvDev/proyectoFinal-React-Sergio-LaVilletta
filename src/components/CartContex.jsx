import { createContext, useEffect, useState } from "react";
export const CartContex = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  };
  const precioTotal = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContex.Provider
      value={{
        carrito,
        agregarCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};
