function ItemCount({
  cantidad,
  handleClickSumar,
  handleClickRestar,
  agregarAlCarrito,
}) {
  return (
    <div>
      <div className="flex items-center justify-center m-5">
        <button
          onClick={handleClickRestar}
          className="p-2 mx-2 text-sm bg-green-500 rounded-md hover:bg-green-600 "
        >
          -
        </button>
        <p className="flex items-center justify-center w-3 ">{cantidad}</p>
        <button
          onClick={handleClickSumar}
          className="p-2 mx-2 text-sm bg-green-500 rounded-md hover:bg-green-600 "
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <button
          onClick={agregarAlCarrito}
          className="p-2 text-center bg-green-500 rounded-md hover:bg-green-600 "
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
