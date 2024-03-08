import { useState, useEffect } from 'react';
import JobList from '../components/JobList';
// import { jobs } from '../lib/fake-data';
import { getJobs } from '../lib/graphql/queries';



function HomePage() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getJobs().then((data) => setJobs(data));
    }, 1500)
  }, [])

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      {
        jobs.length === 0 ? <p>Loading...</p> : <JobList jobs={jobs} />
      }

    </div>
  );
}

export default HomePage;
