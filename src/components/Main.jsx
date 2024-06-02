import ItemListContainer from "./ItemListContainer";

function Main() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <main>
      <ItemListContainer soyUnAtributo="Hola esta es mi pagina de prueba en React" />

      <button
        className="bg-blue-500 transition-all mx-2 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
        onClick={handleClick}
      >
        Click
      </button>
    </main>
  );
}
export default Main;
