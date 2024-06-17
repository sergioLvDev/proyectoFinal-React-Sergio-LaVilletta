/* eslint-disable react/prop-types */
import Item from "./Item";

function ItemsList({ items }) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {items.map((i) => (
        <Item item={i} key={i.id} />
      ))}
    </section>
  );
}
export default ItemsList;
