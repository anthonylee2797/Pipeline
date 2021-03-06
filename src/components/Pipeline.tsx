import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Column from './Column';
import Job from './Job';
import { usePipeline, setPipeline } from '../Context/JobContext';
import { CSS_COLOR_NAMES, randomColor } from '../styles/colors.js';
import { Link, useHistory } from 'react-router-dom';

const Pipeline = () => {
  const companyNameEl = useRef(null);
  const roleNameEl = useRef(null);
  const userInformation = usePipeline();
  const setPipelineState = setPipeline();
  const history = useHistory();

  const userId = userInformation._id;
  const jobs = userInformation.jobs;
  const columns = ['Applied', 'Phone', 'On Site', 'Offer', 'Rejected']

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
      setPipelineState({ ...userInformation, jobs: jobs.concat(data) });

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

  if (Object.keys(userInformation).length === 0) {
    alert('Please login again')
    history.push('/login')
    return null
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
        {columns.map((column) => {
          return (
            <Column columnName={column}>
              {jobs
                .filter((el: any) => el.status === column)
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
          )
        })}
      </div>
    </div>
  );
};

export default Pipeline;
