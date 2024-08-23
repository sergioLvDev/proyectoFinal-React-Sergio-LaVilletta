import TituloPagina from "./TituloPagina";

function Home() {
  return (
    <div className="flex flex-row max-[900px]:flex-col  items-center justify-center border-4   border-black min-h-[78vh]">
      <div className="flex max-[900px]:w-full flex-col w-1/2 m-2 ">
        <h1 className="mb-12 text-5xl font-bold text-green-600 text-start">
          Bienvenidos a la <br /> Tienda Digital
        </h1>
        <p className="mr-5 font-serif text-xl text-center text-green-400 sm:text-right ">
          Las mejores marcas y productos a la venta
        </p>
      </div>

      <div className="flex flex-row flex-wrap max-[900px]:w-full  items-center justify-center w-1/2 gap-5 ">
        <img
          src="/imagenesProductos/camperas/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md -rotate-3"
        />
        <img
          src="/imagenesProductos/remeras/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md rotate-3"
        />
        <img
          src="/imagenesProductos/pantalones/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md -rotate-3"
        />

        <img
          src="/imagenesProductos/remeras/03.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md rotate-3"
        />
        <img
          src="/imagenesProductos/camperas/05.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md rotate-3"
        />
        <img
          src="/imagenesProductos/pantalones/02.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md -rotate-3"
        />
        <img
          src="/imagenesProductos/remeras/04.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md rotate-3"
        />
        <img
          src="/imagenesProductos/camperas/03.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md -rotate-3"
        />
      </div>
    </div>
  );
}
export default Home;
