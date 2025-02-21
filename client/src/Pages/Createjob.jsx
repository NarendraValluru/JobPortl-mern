import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable'

const Createjob = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const handleChange = (selected) => {
      setSelectedOption(selected);  // Update selectedOption state
    };
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        if (!selectedOption || selectedOption.length === 0) {
            console.error("No skills selected");
            return;
        }
    
        data.skills = selectedOption.map(option => option.value);  // Extract only values
    
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            
            if (result.acknowledged === true) {  // ✅ Moved inside `.then()`
                alert("Job Posted Successfully!!");
                reset();
            }
        })
        .catch(error => {
            console.error("Error posting job:", error);
            alert("Failed to post job!");
        });
    };
    
      
      
      
      const options=[
        {value: 'JavaScript', label:'JavaScript'},
        {value: 'C++', label:'C++'},
        {value: 'HTML', label:'HTML'},
        {value: 'CSS', label:'CSS'},
        {value: 'React', label:'React'},
        {value: 'Node', label:'Node'},
        {value: 'MongoDB', label:'MongoDB'},
        {value: 'Redux', label:'Redux'},
      ]
   
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* first row */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title</label>
                <input type="text" defaultValue={"web developer"} {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>

            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company name</label>
                <input type="text" placeholder='Ex:Google' {...register("companyName")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>

        </div>
      {/* second row */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type="text" placeholder='$20k' {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>

            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Price</label>
                <input type="text" placeholder='$120k' {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>

        </div>

        {/* third row */}

        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
                <select {...register("salaryType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                  <option value="">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>            
            </div>

            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location</label>
                <input type="text" placeholder='London' {...register("jobLocation")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>

        </div>

        {/* fourth row */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type="date" placeholder='Ex: 2025-01-20' {...register("postingDate")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Experience Level</label>
                <select {...register("experienceLevel")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                  <option value="">Choose your experience</option>
                  <option value="Any experience">Any experience</option>
                  <option value="Work remotely">Work remotely</option>
                  <option value="Intership">Internship</option>
                </select>            
            </div>

        </div>

        {/* fifth row */}
        <div>
        <label className='block mb-2 text-lg'>Required Skill Sets:</label>
          <CreatableSelect value={selectedOption} 
          onChange={handleChange}
          options={options}
          isMulti
          className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
        </div>

        {/* sixth row */}

        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input type="url" placeholder='Paste your company logo URL:https://weshare.com/img1.png' {...register("companyLogo")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
                <select {...register("employmentType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                  <option value="">Select your job Type</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                </select>            
            </div>

        </div>

        {/* seventh row */}
        <div className='w-full '>
        <label className='block mb-2 text-lg'>Job Description</label>
        <textarea className='w-full pl-3 py-1.5 focus:outline-none' 
        rows={6} placeholder='Enter job description'
        {...register("description")} />

        </div>

        {/* last row */}
        <div className='w-full'>
        <label className='block mb-2 text-lg'>Job Posted By</label>
        <input type="email" placeholder='your email' {...register("postedBy")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />

        </div>

      <input type="submit" className='bg-blue block mt-12 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
    </form>

      </div>
    </div>
  );
}

export default Createjob;
