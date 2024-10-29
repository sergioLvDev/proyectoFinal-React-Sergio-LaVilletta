import { Slide, Fade } from "react-awesome-reveal";
import ItemListContainer from "./ItemListContainer";
import { Carousel } from "@material-tailwind/react";
import TituloPagina from "./TituloPagina";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-[60px] flex justify-center items-center  bg-cyan-800">
        <Fade duration={3000} cascade>
          <h1 className="font-sans text-xl font-extrabold text-center text-black sm:text-3xl">
            Bienvenidos a la Tienda Digital
          </h1>
        </Fade>
      </div>

      <div>
        <Carousel className="bg-white " autoplay={true} loop={true}>
          <img
            src="../imagenesProductos/banner3.jpg"
            alt="ban3"
            className="object-contain w-full h-full"
          />
          <img
            src="../imagenesProductos/banner1.png"
            alt="ban1"
            className="top-0 object-contain w-full h-full bg-"
          />
          <img
            src="../imagenesProductos/banner2.jpg"
            alt="ban2"
            className="object-contain w-full h-full"
          />
        </Carousel>
      </div>
      <div className=" bg-cyan-600">
        <Slide duration={2000}>
          <p className="mx-5 font-serif text-center text-black sm:text-right text-md ">
            Las mejores marcas y productos a la venta
          </p>
        </Slide>
      </div>
      <TituloPagina titulo={"Categorias"} />

      <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 md:grid-cols-4">
        <NavLink to="/categoria/Zapatillas">
          <div className="flex items-center justify-center w-full h-72 bg-cover  rounded-lg bg-[url('../public/imagenesProductos/zapatillas/04.jpg')]">
            <span className="cate">Zapatillas</span>
          </div>
        </NavLink>
        <NavLink to="/categoria/Pantalones">
          <div className="flex items-center justify-center w-full h-full bg-cover  rounded-lg bg-[url('../public/imagenesProductos/pantalones/03.jpg')]">
            <span className="cate">Pantalones</span>
          </div>
        </NavLink>

        <NavLink to="/categoria/Remeras">
          <div className="flex items-center justify-center w-full h-full bg-cover  rounded-lg bg-[url('../public/imagenesProductos/remeras/01.jpg')]">
            <span className="cate">Remeras</span>
          </div>
        </NavLink>
        <NavLink to="/categoria/Camperas">
          <div className="flex items-center justify-center w-full h-full bg-cover  rounded-lg bg-[url('../public/imagenesProductos/camperas/02.jpg')]">
            <span className="cate">Camperas</span>
          </div>
        </NavLink>
      </div>

      <ItemListContainer />
    </div>
  );
}
export default Home;
