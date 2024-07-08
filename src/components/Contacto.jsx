import Button from "./Button";
import TituloPagina from "./TituloPagina";
import { useForm } from "react-hook-form";

function Contacto() {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div>
      <TituloPagina Titulo="Contacto" />
      <form
        className="flex flex-col items-start gap-3 mx-10 "
        onSubmit={handleSubmit(enviar)}
      >
        <div>
          <label htmlFor="nombre" className="mr-2">
            Nombre
          </label>
          <input type="text" {...register("nombre")} />
        </div>
        <div>
          <label htmlFor="email" className="mr-2">
            E-mail
          </label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="telefono" className="mr-2">
            Teléfono
          </label>
          <input type="tel" {...register("telefono")} />
        </div>
        <div>
          <label htmlFor="edad" className="mr-2">
            Edad
          </label>
          <input type="number" {...register("edad")} />
        </div>
        <Button text="Submit" />
      </form>
    </div>
  );
}
export default Contacto;
