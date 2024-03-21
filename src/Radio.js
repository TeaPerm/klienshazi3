import React from "react";

const Radio = ({onChange}) => {
  return (
    <div className="flex mb-2 items-center justify-center">
      <select
        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         onChange={onChange}
      >
        <option value="amber">Amber</option>
        <option value="red">Red</option>
        <option value="lime">Lime</option>
        <option value="zinc">Zinc</option>
        <option value="indigo">Indigo</option>
      </select>
    </div>
  );
};

export default Radio;
