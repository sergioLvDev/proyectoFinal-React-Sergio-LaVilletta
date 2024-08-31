function Button({ text }) {
  const handleClick = () => {};

  return (
    <div className="inline-flex">
      <button
        className="px-4 py-2 mx-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-cyan-800"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
