function Carrito() {
  return (
    <div>
      <h2>Carrito</h2>
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
