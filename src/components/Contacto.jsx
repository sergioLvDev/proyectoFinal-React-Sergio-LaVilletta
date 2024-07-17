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
      <form onSubmit={handleSubmit(enviar)}>
        <div className="flex items-start gap-10 mx-3 mb-5 ">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="nombre">Nombre</label>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="telefono">Teléfono</label>
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" {...register("nombre")} />
            <input type="email" {...register("email")} />
            <input type="tel" {...register("telefono")} />
          </div>
        </div>
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
}
export default Contacto;
