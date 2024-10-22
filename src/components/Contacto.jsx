import React from "react";

const Contacto = () => {
  return (
    <div className="m-2 font-[sans-serif] max-w-6xl xl:mx-auto  relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
      <div className="absolute w-20 h-20 bg-blue-400 rounded-full -bottom-6 -left-6"></div>
      <div className="absolute w-20 h-20 bg-blue-400 rounded-full -top-6 -right-6"></div>
      <div className="grid gap-8 px-6 py-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="../imagenesProductos/contacto.jpg"
            alt="contacto img"
            className="w-5/6 shrink-0"
          />
        </div>
        <form
          data-netlify="true" // para netlify
          method="POST"
          className=" rounded-tl-3xl rounded-bl-3xl"
          name="contactecommerce"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
            Contacto
          </h2>
          <div className="relative max-w-md mx-auto">
            <label className="ml-1 text-gray-600">Nombre</label>
            <input
              type="text"
              id="name"
              name="nameeco"
              className="w-full px-4 py-1 mb-2 text-sm text-black bg-gray-300 rounded-md required outline-blue-600"
            />
            <label className="ml-1 text-gray-600">Correo Electrónico</label>
            <input
              id="email"
              name="emaileco"
              type="email"
              className="w-full px-4 py-1 text-sm text-black bg-gray-300 rounded-md required outline-blue-600 "
            />
            <label className="ml-1 text-gray-600">Teléfono</label>
            <input
              id="tel"
              name="teleco"
              type="tel"
              className="w-full px-4 py-1 text-sm text-black bg-gray-300 rounded-md outline-blue-600 focus-within:bg-transparent"
            />

            <label className="ml-1 text-gray-600">Comentarios</label>
            <textarea
              id="comments"
              name="comments"
              rows="6"
              className="w-full px-4 pt-3 text-sm text-black bg-gray-300 rounded-md outline-blue-600 focus-within:bg-transparent"
            ></textarea>

            <button
              type="submit"
              className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contacto;
