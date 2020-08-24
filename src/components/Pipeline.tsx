import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Column from './Column';
import Job from './Job';
import { useJob, setJobs } from '../Context/JobContext';

// Provider allows us to declare data that we want available throughout our component tree
// Consumer allows any component in the component tree that needs that data to be able to subscribe to it

const Pipeline = () => {
  const companyNameEl = useRef(null);
  const jobs = useJob();
  const setJobss = setJobs();

  function addJob(e: any) {
    e.preventDefault();
    let company = companyNameEl.current.value;
    setJobss(jobs.concat({ company: company, status: 'Applied', id: uuid() }));
  }

  return (
    <div className="main-container">
      <div className="main-container-columns">
        <Column columnName="Applied">
          {jobs
            .filter((el: any) => el.status === 'Applied')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} />
            ))}
        </Column>
        <Column columnName="Phone">
          {jobs
            .filter((el: any) => el.status === 'Phone')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} />
            ))}
        </Column>
        <Column columnName="ON SITE">
          {jobs
            .filter((el: any) => el.status === 'ON SITE')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} />
            ))}
        </Column>

        <Column columnName="Offer">
          {jobs
            .filter((el: any) => el.status === 'Offer')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} />
            ))}
        </Column>
        <Column columnName="Rejected">
          {jobs
            .filter((el: any) => el.status === 'Rejected')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} />
            ))}
        </Column>
      </div>

      <form onSubmit={addJob}>
        <label>Company Name: </label>
        <input type="text" ref={companyNameEl}></input>
        <button type="submit">Add Application</button>
      </form>
    </div>
  );
};

export default Pipeline;
