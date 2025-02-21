import React from 'react';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  const {companyName,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType
    ,postingDate,description,jobTitle}= data
  return (
    <section className='bg-white shadow-md rounded-lg p-4 border border-gray-500 hover:shadow-md transition mb-3'>
      <Link to={"/"} className='flex gap-2 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='' className='w-12 h-10 object-contain'/>
          <div>
            <h4 className='text-primary text-lg mb-1'>{companyName}</h4>
            <h3 className='text-primary font-semibold mb-2'>{jobTitle}</h3>
              <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}k</span>
                <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
            </div>
            <p className='text-base text-primary/70'>{description}</p>
          </div>
      </Link> 
    </section>
  ); 
}

export default Card;
