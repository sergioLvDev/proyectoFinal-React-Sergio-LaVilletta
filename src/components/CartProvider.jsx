import { createContext } from "react";
import { useState } from "react";

export const miContexto = createContext(); // es el contexto y a la vez un objeto
const Provider = miContexto.Provider; // utilizo la propiedad Provider del objeto miContexto como un componente

function CartProvider({ children }) {
  const [carritoCant, setCarritoCant] = useState(0);

  const valorDelContexto = {
    cant: carritoCant,
    fn: () => {
      setCarritoCant(carritoCant + 1);
    },
  };
  return <Provider value={valorDelContexto}>{children}</Provider>;
}
export default CartProvider;
