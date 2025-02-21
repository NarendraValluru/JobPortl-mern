import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        {/* Change the "All" option to match InputField structure */}
        <InputField handleChange={handleChange} value="" title="All" name="test"/>
        
        {/* Other locations */}
        <InputField handleChange={handleChange} value="london" title="London" name="test"/>
        <InputField handleChange={handleChange} value="brussels" title="Brussels" name="test"/>
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test"/>
        <InputField handleChange={handleChange} value="boston" title="Boston" name="test"/>
        <InputField handleChange={handleChange} value="san francisco" title="San Francisco" name="test"/>
        <InputField handleChange={handleChange} value="chennai" title="Chennai" name="test"/>
        <InputField handleChange={handleChange} value="bangalore" title="Bangalore" name="test"/>
        <InputField handleChange={handleChange} value="hyderabad" title="Hyderabad" name="test"/>
      </div>
    </div>
  );
};

export default Location;
