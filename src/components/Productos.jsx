/* eslint-disable react/prop-types */
function Productos({ productos }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {productos.map((producto, indice) => {
        return (
          <article
            key={indice}
            className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105"
          >
            <img
              src={producto.images[0]}
              alt={producto.title}
              className="object-contain aspect-square"
            />
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p className="text-gray-400">${producto.price}</p>
          </article>
        );
      })}
    </section>
  );
}
export default Productos;
