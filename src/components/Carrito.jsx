import TituloPagina from "./TituloPagina";

function Carrito() {
  return (
    <div>
      <TituloPagina Titulo="Carrito" />
      <p>Articulos en el carrito</p>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
        </div>
        <button>Agregar Producto</button>
      </form>
    </div>
  );
}
export default Carrito;
