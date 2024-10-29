import { Slide, Fade } from "react-awesome-reveal";
import ItemListContainer from "./ItemListContainer";
import { Carousel } from "@material-tailwind/react";
import TituloPagina from "./TituloPagina";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

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

      <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-4">
        <NavLink to="/categoria/Zapatillas " className="relative">
          <img
            className="object-cover object-center w-full max-w-full rounded-lg"
            src="../public/imagenesProductos/zapatillas/01.jpg"
            alt="gallery-photo"
          />
          <figcaption className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 cate">
            Zapatillas
          </figcaption>
        </NavLink>
        <NavLink to="/categoria/Pantalones" className="relative">
          <img
            className="object-cover object-center w-full max-w-full rounded-lg"
            src="../public/imagenesProductos/pantalones/01.jpg"
            alt="gallery-photo"
          />
          <figcaption className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 cate">
            Pantalones
          </figcaption>
        </NavLink>

        <NavLink to="/categoria/Remeras" className="relative">
          <img
            className="object-cover object-center w-full max-w-full rounded-lg"
            src="../public/imagenesProductos/remeras/01.jpg"
            alt="gallery-photo"
          />
          <figcaption className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 cate">
            Remeras
          </figcaption>
        </NavLink>
        <NavLink to="/categoria/Camperas" className="relative">
          <img
            className="object-cover object-center w-full max-w-full rounded-lg"
            src="../public/imagenesProductos/camperas/01.jpg"
            alt="gallery-photo"
          />
          <figcaption className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 cate">
            Camperas
          </figcaption>
        </NavLink>
      </div>

      <ItemListContainer />
    </div>
  );
}
export default Home;
