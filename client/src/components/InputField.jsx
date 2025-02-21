import React from "react";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="flex items-center mb-2 gap-2 cursor-pointer">
      {/* Hidden radio input */}
      <input
        type="radio"
        name={name} 
        value={value}
        onChange={handleChange}
        
      />
      {/* Custom radio button with consistent size */}
      {/* <span className="w-3 h-3 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-blue-500 transition"></span> */}
      <span className="text-gray-700">{title}</span>
    </label>
  );
};

export default InputField;
