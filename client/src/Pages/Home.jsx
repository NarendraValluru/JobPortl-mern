import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Card from "../components/Card";
import Jobs from "../Pages/Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [selectedCategory,setSelectedCategory]= useState("");
  const [jobs,setJobs]=useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage=6;

  useEffect(()=>{

    setIsLoading(true)
    fetch("http://localhost:3000/all-jobs")
    .then(res=>res.json()).then(data=>{
      setJobs(data)
      setIsLoading(false)
    })
  },[])
  // console.log(jobs);
  const [query, setQuery]=useState("");
      const handleInputChange=(event)=>{
          setQuery(event.target.value)
          
      }
      
  const filteredItems=jobs.filter((job) =>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1);
  // console.log(filteredItems)

  const handleChange =(event)=>{
    setSelectedCategory(event.target.value)
   
  }

  const handleClick =(event) =>{
    setSelectedCategory(event.target.value)
  }

  const calculatePageRange =() =>{
    const startIndex=(currentPage -1) * itemsPerPage
    const endIndex= startIndex+itemsPerPage
    return {startIndex,endIndex}
  }

  const nextPage =()=>{
    if(currentPage < Math.ceil(filteredItems.length /itemsPerPage)){
      setCurrentPage(currentPage+1)
    }
  }

  const prevPage =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage -1)
    }
  }


  const filteredData=(jobs,selected,query) =>{
    let filteredJobs =jobs;
    if(query){
      filteredJobs=filteredItems;
    }
   if (selected) {
  filteredJobs = filteredJobs.filter(
    ({
      jobLocation,
      minPrice,
      maxPrice,
      experienceLevel,
      salaryType,
      employmentType,
      postingDate,
    }) =>
      jobLocation.toLowerCase() === selected.toLowerCase() || 
      parseInt(minPrice) === parseInt(selected) ||
      // parseInt(maxPrice) <= parseInt(selected) ||
      postingDate >= selected ||
      salaryType.toLowerCase() === selected.toLowerCase() ||
      experienceLevel.toLowerCase() === selected.toLowerCase() ||
      employmentType.toLowerCase() === selected.toLowerCase() ||
      new Date(postingDate) >= new Date(selected) // Ensures date comparison
  );
  console.log(filteredItems)
}

    const {startIndex,endIndex}= calculatePageRange();
    filteredJobs=filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result= filteredData(jobs,selectedCategory,query);

  return (
      <div>
        <Banner query={query} handleInputChange={handleInputChange}/>
        <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-6 lg:px-18 px-3 py-9">
          <div className="bg-white p-4 rounded">
            <Sidebar handleChange={handleChange} handleClick={handleClick}/>
          </div>

          <div className="col-span-2 bg-white p-3 rounded-sm">
            {
              isLoading ? (<p className="font-medium">Loading....</p>) :  result.length >0 ?(<Jobs result={result}/>) :<>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No Data Found! </p>
              </>
            }
            {
              result.length > 0 ? (
                <div className="flex justify-center mt-3 space-x-7">
                  <button onClick={prevPage} disabled={currentPage===1} className="hover:underline">Previous</button>
                  <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                  <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemsPerPage)} className="hover
                  : underline" >Next</button>
                   </div>
              ) : ""
            }
          </div> 
          <div className="bg-white p-4 rounded"><NewsLetter /></div>
        </div>
      </div>
  )
}

export default Home