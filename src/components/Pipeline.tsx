import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Column from './Column';
import Job from './Job';
import { useJob, setJobs } from '../Context/JobContext';
import { CSS_COLOR_NAMES, randomColor } from '../styles/colors.js';

const Pipeline = () => {
  const companyNameEl = useRef(null);
  const roleNameEl = useRef(null);
  const userInformation = useJob();
  const setJobss = setJobs();

  const userId = userInformation._id;
  const jobs = userInformation.jobs;

  // Adds job to screen
  async function addJob(e: any) {
    e.preventDefault();
    let company = companyNameEl.current.value;
    let role = roleNameEl.current.value;
    let data = {
      company: company,
      status: 'Applied',
      role: role,
      id: uuid(),
      color: randomColor(),
    };

    // resets form
    companyNameEl.current.value = '';
    roleNameEl.current.value = '';

    if (company && role) {
      // changes state in JobContext
      setJobss({ ...userInformation, jobs: jobs.concat(data) });

      // makes changes to server
      await fetch('/postJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, id: userId }),
      }).then((response) => response.json());
    } else {
      alert('Please enter Company Name and Role');
    }
  }

  return (
    <div className="main-container">
      <form className="app-form" onSubmit={addJob}>
        <div>
          <input type="text" placeholder="Insert Company Name" ref={companyNameEl}></input>
        </div>
        <div>
          <input type="text" placeholder="Insert Role" ref={roleNameEl}></input>
        </div>
        <button type="submit">Add Application</button>
      </form>

      {/* Column for Each Phase of Application */}
      <div className="main-container-columns">
        <Column columnName="Applied">
          {jobs
            .filter((el: any) => el.status === 'Applied')
            .map((el: any) => (
              <Job
                status={el.status}
                company={el.company}
                id={el.id}
                role={el.role}
                color={el.color}
              />
            ))}
        </Column>

        <Column columnName="Phone">
          {jobs
            .filter((el: any) => el.status === 'Phone')
            .map((el: any) => (
              <Job
                status={el.status}
                company={el.company}
                id={el.id}
                role={el.role}
                color={el.color}
              />
            ))}
        </Column>

        <Column columnName="ON SITE">
          {jobs
            .filter((el: any) => el.status === 'ON SITE')
            .map((el: any) => (
              <Job
                status={el.status}
                company={el.company}
                id={el.id}
                role={el.role}
                color={el.color}
              />
            ))}
        </Column>

        <Column columnName="Offer">
          {jobs
            .filter((el: any) => el.status === 'Offer')
            .map((el: any) => (
              <Job
                status={el.status}
                company={el.company}
                id={el.id}
                role={el.role}
                color={el.color}
              />
            ))}
        </Column>

        <Column columnName="Rejected">
          {jobs
            .filter((el: any) => el.status === 'Rejected')
            .map((el: any) => (
              <Job
                status={el.status}
                company={el.company}
                id={el.id}
                role={el.role}
                color={el.color}
              />
            ))}
        </Column>
      </div>
    </div>
  );
};

export default Pipeline;
