import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    //loading data 
    const [jobs,setJobs]= useState([]);
    const [dataLength,setDataLength]=useState(4);
    
    useEffect(()=>{
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data=> setJobs(data));
    },[])


    return (
        <div>
            <h2 className="text-3xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' :''}>
                <button 
                onClick={()=>{setDataLength(jobs.length)}}
                 className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;