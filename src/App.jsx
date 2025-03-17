import { useState } from "react";

export const App = () => {
  const [color, setColor] = useState("bg-red-200");

  const getRandomColor = () => {
    const colors = [ 
      "bg-green-200", 
      "bg-blue-200", 
      "bg-yellow-200",
      "bg-purple-200", 
      "bg-pink-200", 
      "bg-gray-200", 
      "bg-orange-200",
      "bg-indigo-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleChangeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <>
      <div className={`w-[500px] h-[500px] mt-10 ${color}`}></div>
      <h3>El color que hay es: {color}</h3>
      <button 
        className="bg-blue-500 text-white px-4 py-2 mt-7 rounded" 
        onClick={handleChangeColor}
      >
        Cambiar Color
      </button>
    </>
  );
};