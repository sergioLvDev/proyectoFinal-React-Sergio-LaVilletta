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
        <button
          type="submit"
          className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg cursor-pointer hover:bg-cyan-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
export default Contacto;
