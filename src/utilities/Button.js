export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="bg-yellow-500 px-3 py-1 font-medium rounded hover:text-yellow-500 hover:bg-opacity-0 transition-all"
    >
      {children}
    </button>
  );
}
