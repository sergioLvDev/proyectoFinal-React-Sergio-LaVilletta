function Button() {
  const handleClick = () => {};

  return (
    <div>
      <button
        className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-red-700"
        onClick={handleClick}
      >
        Ver en detalle
      </button>
    </div>
  );
}
export default Button;
