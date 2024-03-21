import React from "react";

const Modal = ({ sorozat, isOpen, handleClose }) => {
  const dontTriggerParentOnclick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`fixed h-screen w-screen bg-gray-900/40 top-0 left-0 cursor-default ${
        !isOpen && "hidden"
      }`}
      onClick={dontTriggerParentOnclick}
    >
      <div
        className={`bg-white rounded-lg  shadow-lg overflow-hidden  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 `}
      >
        <div className="bg-white p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold mb-2" id="modalTitle">
            {sorozat.cim}
          </h2>
          <img
            src={sorozat.kep}
            alt="Netflix Sorozat"
            className="w-full h-40 object-cover mb-4"
          />
          <p id="modalContent" className="text-amber-700">
            {sorozat.leiras}
          </p>
          <p id="imdbRating" className="text-amber-700">
            IMDb értékelés: {sorozat.imdb}
          </p>
          <p id="seasons" className="text-amber-700">
            Évadok száma: {sorozat.evadok}
          </p>
          <button
            id="closeModal"
            className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-600"
            onClick={handleClose}
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
