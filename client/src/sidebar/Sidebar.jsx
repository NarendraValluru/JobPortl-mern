import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPosting from './JobPosting';
import WorkExperience from './WorkExperience';
import EmployementType from './EmployementType';

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>

        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPosting handleChange={handleChange}/>
        <WorkExperience handleChange={handleChange} />
        <EmployementType handleChange={handleChange} />
    </div>
  );
}

export default Sidebar;
