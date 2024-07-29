const ItemCount = ({
  cantidad,
  handelRestar,
  handelSumar,
  handelAgregarCarrito,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-2 m-5 ">
        <button
          onClick={handelRestar}
          className="items-center justify-center px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
        >
          -
        </button>
        <button>{cantidad}</button>
        <button
          onClick={handelSumar}
          className="items-center justify-center px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
        >
          +
        </button>
      </div>
      <button
        onClick={handelAgregarCarrito}
        className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};
export default ItemCount;
