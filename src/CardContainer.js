import React, { useState } from "react";
import Card from "./Card";
import sorozatok from "./sorozatok";
import Radio from "./Radio";

const CardContainer = () => {
    const [selectedColor, setSelectedColor] = useState("amber");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className={`bg-${selectedColor}-100 p-4`}>
      <h1 className="text-4xl font-bold text-center mb-4 text-amber-800">
        Sorozatok
      </h1>
      <Radio onChange={handleColorChange} />
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sorozatok.map((sorozat, index) => (
          <Card key={index} sorozat={sorozat} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
