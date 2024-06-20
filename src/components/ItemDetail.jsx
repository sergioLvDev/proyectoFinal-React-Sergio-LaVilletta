/* eslint-disable react/prop-types */

function ItemDetail({ items }) {
  return (
    <section className="w-2/3 gap-8 p-4 text-center rounded-sm bg-slate-800 ">
      <img
        src={items.images}
        alt={items.title}
        className="object-contain aspect-square"
      />
      <h2 className="font-bold truncate">{items.title}</h2>
      <p className="text-gray-400">Descripcion: {items.description}</p>
      <p className="text-gray-400">Categoria: {items.category}</p>
      <p className="text-gray-400">${items.price}</p>
    </section>
  );
}
export default ItemDetail;
