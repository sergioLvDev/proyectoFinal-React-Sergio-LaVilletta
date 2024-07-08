function ItemDetail({ itemsDe }) {
  return (
    <section className="w-2/3 gap-8 p-4 text-center rounded-sm bg-slate-800 ">
      <img
        src={itemsDe.images}
        alt={itemsDe.title}
        className="object-contain aspect-square"
      />
      <h2 className="font-bold truncate">{itemsDe.title}</h2>
      <p className="text-gray-400">Descripcion: {itemsDe.description}</p>
      <p className="text-gray-400">Categoria: {itemsDe.category}</p>
      <p className="text-gray-400">${itemsDe.price}</p>
    </section>
  );
}
export default ItemDetail;
