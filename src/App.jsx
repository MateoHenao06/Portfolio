import { useState } from "react";

// Hooks
export const App = () => {
  const [username, setUsername] = useState("Usuario");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGreet = () => {
    setUsername(inputValue);
    setInputValue("");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Bienvenido {username}</h1>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={inputValue}
        onChange={handleChange}
        className="text-center mt-6 border p-2 rounded"
      />
      <button
        onClick={handleGreet}
        className="w-20 px-4 py-2 mt-6 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-300 cursor-pointer"
      >
        Saludar
      </button>
    </div>
  );
};
