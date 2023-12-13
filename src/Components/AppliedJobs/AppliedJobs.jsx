import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleDisplayJobs = filter=> {
        if(filter=== "All"){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === "Remote"){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "Onsite"){
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite=== 'Onsite');
            setDisplayJobs(onSiteJobs);
        }
    }

    const jobs = useLoaderData();


    useEffect(() => {
        const appliedJobsIds = getStoredJobApplication();
        if (appliedJobsIds) {
            const jobsApplied = jobs.filter(job => appliedJobsIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])



    return (
        <div>
            <h2>Applied Jobs : {appliedJobs.length}</h2>

            {/* dropdown  */}
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick= {()=>{handleDisplayJobs("All")}}><a>All</a></li>
                    <li onClick={()=> {handleDisplayJobs("Remote")}}><a>Remote</a></li>
                    <li onClick={()=>{handleDisplayJobs("Onsite")}}><a>OnSite</a></li>
                </ul>
            </div>

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}> <span>{job.job_title}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;