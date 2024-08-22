import TituloPagina from "./TituloPagina";

function Home() {
  return (
    <>
      {/* <TituloPagina titulo={"Todo lo que buscas en un solo lugar!!!"} /> */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-col w-1/2 m-2 ">
          <h1 className="mb-12 font-bold text-green-600 text-start text-7xl">
            Bienvenidos a la Tienda Digital
          </h1>
          <p className="mr-5 font-serif text-xl text-right text-green-400 ">
            Las mejores marcas y productos a la venta
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-1/2 gap-5 ">
          <img
            src="/imagenesProductos/camperas/01.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md  -rotate-3"
          />
          <img
            src="https://picsum.photos/id/238/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md rotate-3"
          />
          <img
            src="https://picsum.photos/id/239/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md -rotate-3"
          />

          <img
            src="https://picsum.photos/id/237/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md rotate-3"
          />
          <img
            src="https://picsum.photos/id/238/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md rotate-3"
          />
          <img
            src="https://picsum.photos/id/239/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md -rotate-3"
          />
          <img
            src="https://picsum.photos/id/238/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md rotate-3"
          />
          <img
            src="https://picsum.photos/id/239/200/300.jpg"
            alt="carrousel1"
            className="w-1/5 rounded-md -rotate-3"
          />
        </div>
      </div>
    </>
  );
}
export default Home;
