import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplications } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    console.log(job);

    return (
        <div>
            <h2>job details of : {id} </h2>

            <div className="grid md:grid-cols-4 gap-5">
                <div className="border md:col-span-3">
                    <h2>{job.job_title}</h2>
                    <p>{job.job_description}</p>
                </div>
                <div className="border">
                    <button onClick={()=> {saveJobApplications(job.id)}} className="btn btn-primary w-full">Apply Now </button>
                </div>

            </div>
        </div>

    );
};

export default JobDetails;