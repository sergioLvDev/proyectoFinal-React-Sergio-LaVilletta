import ItemListContainer from "./ItemListContainer";
import ProductosContainer from "./ProductosContainer";

function Main() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <main className="grow">
      <ItemListContainer soyUnAtributo="Hola esta es mi pagina de prueba en React" />

      <button
        className="px-4 py-2 mx-2 font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-red-700"
        onClick={handleClick}
      >
        Click
      </button>
      <ProductosContainer />
    </main>
  );
}
export default Main;
