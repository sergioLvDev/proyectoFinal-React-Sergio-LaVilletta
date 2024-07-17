import Item from "./Item";

function ItemsList({ items1 }) {
  return (
    <section className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {items1.map((i) => (
        <Item item={i} key={i.id} />
      ))}
    </section>
  );
}
export default ItemsList;
