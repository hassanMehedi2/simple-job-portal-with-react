const getStoredJobApplication = ()=>{
    const storedJobApplication = localStorage.getItem('job-Application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else return [];
}


const saveJobApplications = id => {
    const storedJobApplications = getStoredJobApplication();
    const exist = storedJobApplications.find(jobId => jobId===id);
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem('job-Application', JSON.stringify(storedJobApplications));
    }
}

export { saveJobApplications , getStoredJobApplication}