import React from 'react';
import InputField from '../components/InputField';

const JobPosting = ({handleChange}) => {
    const now = new Date();
    // console.log(now)
    const twentyFourHoursAgo= new Date(now-24*60*60*1000)
    // console.log(TwentyFourHoursAgo)
    const SevenDaysAgo= new Date(now-7*24*60*60*1000)
    const ThirtyDaysAgo= new Date(now-30*24*60*60*1000)

    const TwentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate= SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate= ThirtyDaysAgo.toISOString().slice(0,10);


    // console.log(TwentyFourHoursAgoDate)
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        {/* Change the "All" option to match InputField structure */}
        <InputField handleChange={handleChange} value="" title="All Time" name="test"/>
        
        {/* Other locations */}
        <InputField handleChange={handleChange} value={TwentyFourHoursAgoDate} title="Last 24 Hours" name="test"/>
        <InputField handleChange={handleChange} value={SevenDaysAgoDate} title="Last 7 Days" name="test"/>
        <InputField handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last 30 Days" name="test"/>
       
      </div>
    </div>
  );
}

export default JobPosting;
