import React from 'react';
import InputField from '../components/InputField';

const WorkExperience = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        {/* Change the "All" option to match InputField structure */}
        <InputField handleChange={handleChange} value="" title="Any Experience" name="test"/>
        <InputField handleChange={handleChange} value="Intership" title="Intership" name="test"/>
        <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>

      </div>
    </div>
  );
}

export default WorkExperience;
