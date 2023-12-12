import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h3 className="text-2xl font-semibold">{job_title}</h3>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded-sm border-[#7E90FE] mr-5">{remote_or_onsite}</button>
          <button className="px-5 py-2 font-extrabold border rounded-sm border-[#7E90FE]">{job_type}</button>
        </div>
        <div className="flex gap-8">
          <h2 className="flex items-center gap-4"><CiLocationOn />{location}</h2>
          <h2 className="flex  items-center gap-4"><AiOutlineDollarCircle />{salary}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;