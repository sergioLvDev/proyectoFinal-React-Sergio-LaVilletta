import { Slide, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-row items-stretch  max-[875px]:flex-col  lg:h-[87vh] border-y-4   border-black">
      <div className="flex max-[875px]:w-full flex-col justify-center max-[875px]:h-[400px] bg-gradient-to-t from-cyan-900 	via-cyan-500 to-cyan-900 rounded-r-full  w-1/2 ">
        <Fade duration={3000} cascade>
          <h1 className="px-4 mb-12 font-serif text-5xl max-[520px]:text-3xl font-extrabold text-black ">
            Bienvenidos a la <br /> Tienda Digital
          </h1>
        </Fade>
        <Slide duration={2000}>
          <p className="mx-5 font-serif text-xl max-[520px]:text-base text-black sm:text-right ">
            Las mejores marcas y productos a la venta
          </p>
        </Slide>
        <div className="flex items-center justify-center">
          <NavLink
            to="/productos"
            className={
              "bg-cyan-900 w-40 mt-6 text-center px-4 py-2 mx-2 animate-bounce text-sm font-bold  text-slate-300 transition-all  rounded-lg hover:bg-black"
            }
          >
            Ver Productos !!!
          </NavLink>
        </div>
      </div>

      <div className="grid max-[530px]:grid-cols-1 w-1/2  max-[875px]:w-full  grid-cols-2 gap-8 p-8 place-content-center place-items-center lg:grid-cols-4  ">
        <img
          src="/imagenesProductos/camperas/01.jpg"
          alt="carrousel1"
          className="w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all -rotate-3"
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
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 min-w-[120px] hover:transition-all rotate-3"
        />
        <img
          src="/imagenesProductos/camperas/05.jpg"
          alt="carrousel1"
          className="object-cover w-40 h-48 rounded-md hover:scale-110 hover:rotate-0 hover:transition-all min-w-[120px] rotate-3"
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
