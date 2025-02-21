import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';

const SalaryPage = () => {
    const [searchText,setSearchText]=useState("")
    const [salary,setSalary]=useState([])
    useEffect(() =>{
        
    },[])

    const handleSearch =()=>{
        const filter = salary.filter(
            (job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase())!==-1)

    }
    console.log(searchText)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={'Estimate Salary'} path={'Salary'}/>
      <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
            <input type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none
            lg:w-6/12 mb-4 w-full' onChange={e=> setSearchText(e.target.value)}/>
            <button onClick={handleSearch} className='bg-blue text-white px-8 py-2 font-semibold rounded-sm mb-4'>Search</button>

        </div>

      </div>
    </div>
  );
}

export default SalaryPage;
