import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Column from './Column';
import Job from './Job';
import { useJob, setJobs } from '../Context/JobContext';
import { CSS_COLOR_NAMES } from '../styles/colors.js';

// Provider allows us to declare data that we want available throughout our component tree
// Consumer allows any component in the component tree that needs that data to be able to subscribe to it

let randomColor = () => { return CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]}

const Pipeline = () => {
  const companyNameEl = useRef(null);
  const roleNameEl = useRef(null);
  const jobs = useJob();
  const setJobss = setJobs();

  function addJob(e: any) {
    e.preventDefault();
    let company = companyNameEl.current.value;
    let role = roleNameEl.current.value;

    if (company && role) {
      setJobss(jobs.concat({ company: company, status: 'Applied', role: role, id: uuid(), color: randomColor() }));
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

      <div className="main-container-columns">
        <Column columnName="Applied">
          {jobs
            .filter((el: any) => el.status === 'Applied')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} role={el.role} color={el.color} />
            ))}
        </Column>
        <Column columnName="Phone">
          {jobs
            .filter((el: any) => el.status === 'Phone')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} role={el.role} color={el.color} />
            ))}
        </Column>
        <Column columnName="ON SITE">
          {jobs
            .filter((el: any) => el.status === 'ON SITE')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} role={el.role} color={el.color} />
            ))}
        </Column>

        <Column columnName="Offer">
          {jobs
            .filter((el: any) => el.status === 'Offer')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} role={el.role} color={el.color} />
            ))}
        </Column>
        <Column columnName="Rejected">
          {jobs
            .filter((el: any) => el.status === 'Rejected')
            .map((el: any) => (
              <Job status={el.status} company={el.company} id={el.id} role={el.role} color={el.color} />
            ))}
        </Column>
      </div>
    </div>
  );
};

export default Pipeline;
