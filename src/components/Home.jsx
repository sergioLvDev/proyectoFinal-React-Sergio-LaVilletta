import { Slide, Fade } from "react-awesome-reveal";
import ItemListContainer from "./ItemListContainer";
import { Carousel } from "@material-tailwind/react";

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
      <ItemListContainer />
    </div>
  );
}
export default Home;
