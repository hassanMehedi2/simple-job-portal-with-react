import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    //loading data 
    const [jobs,setJobs]= useState([]);
    
    useEffect(()=>{
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data=> setJobs(data));
    },[])


    return (
        <div>
            <h2 className="text-3xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;