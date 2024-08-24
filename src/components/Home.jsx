import TituloPagina from "./TituloPagina";

function Home() {
  return (
    <div className="flex flex-row items-stretch  max-[900px]:flex-col h-[87vh] border-y-4   border-black">
      <div className="flex max-[900px]:w-full flex-col justify-center bg-cyan-300 rounded-r-full  w-1/2 ">
        <h1 className="px-4 mb-12 text-5xl font-bold text-black animate-bounce">
          Bienvenidos a la <br /> Tienda Digital
        </h1>
        <p className="mr-5 font-serif text-xl text-black sm:text-right ">
          Las mejores marcas y productos a la venta
        </p>
      </div>

      <div className="flex flex-row flex-wrap max-[900px]:w-full items-center content-center justify-center w-1/2 gap-5 ">
        <img
          src="/imagenesProductos/camperas/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all -rotate-3"
        />
        <img
          src="/imagenesProductos/remeras/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all rotate-3"
        />
        <img
          src="/imagenesProductos/pantalones/01.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all -rotate-3"
        />

        <img
          src="/imagenesProductos/remeras/03.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all rotate-3"
        />
        <img
          src="/imagenesProductos/camperas/05.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all rotate-3"
        />
        <img
          src="/imagenesProductos/pantalones/02.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all -rotate-3"
        />
        <img
          src="/imagenesProductos/remeras/04.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all rotate-3"
        />
        <img
          src="/imagenesProductos/camperas/03.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all -rotate-3"
        />
      </div>
    </div>
  );
}
export default Home;
