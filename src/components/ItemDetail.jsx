function ItemDetail({ itemsDe }) {
  console.log(itemsDe);
  return (
    <section className="flex flex-row w-2/4 gap-8 p-4 mx-auto rounded-sm bg-slate-800 ">
      <div>
        <img
          src={itemsDe.images}
          alt={itemsDe.title}
          className="object-contain aspect-square"
        />
      </div>
      <div className="flex flex-col gap-8 text-start">
        <h2 className="p-2 font-bold underline uppercase truncate">
          {itemsDe.title}
        </h2>
        <p className="text-gray-400">Descripcion: {itemsDe.description}</p>
        <p className="text-gray-400">Stock: {itemsDe.stock}</p>
        <p className="text-gray-400">${itemsDe.price}</p>
      </div>
    </section>
  );
}
export default ItemDetail;
