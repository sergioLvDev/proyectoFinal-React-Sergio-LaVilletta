import { createContext } from "react";

export const miContexto = createContext(); // es el contexto y a la vez un objeto
const Provider = miContexto.Provider; // utilizo la propiedad Provider del objeto miContexto como un componente
console.log(miContexto);

function CartProvider(props) {
  const valorDelContexto = {
    carritoCant: 0,
    loggedIn: false,
    fn: () => console.log("Hola"),
  };
  return <Provider value={valorDelContexto}>{props.children}</Provider>;
}
export default CartProvider;
