import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ sorozat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModalOpen = () => {
    setIsModalOpen((current) => !current);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={handleToggleModalOpen}
    >
      <img
        src={sorozat.kep}
        alt="Netflix Sorozat"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 line-clamp-2">
        <h2 className="text-xl font-semibold text-amber-800 mb-2">
          {sorozat.cim}
        </h2>
        <p className="text-amber-700 line-clamp-2">{sorozat.leiras}</p>
      </div>
      <Modal sorozat={sorozat} isOpen={isModalOpen} handleClose={handleToggleModalOpen}/>
    </div>
  );
};

export default Card;
