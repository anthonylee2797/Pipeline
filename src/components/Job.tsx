import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { useJob, setJobs } from '../Context/JobContext';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  CARD: 'card',
};

const JobComponent = styled('div')`
  display: flex;
  color: black;
  text-align: left;
  border-radius: 10px;
  cursor: pointer;
  width: 80%;
  padding: 2px;
  background-color: ${(props) => props.color};
  height: 60%;
  margin: 10px auto;
  font-size: 15px;

  .job-info {
    font-weight: 800;
    width: 80%;
  }

  .job-button {
    border-radius: 10px;
    color: #ffffff;
    font-size: 14px;
    margin: 5px 0px;
    border-style: none;
    background-color: #f63d3d;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;
  }
  .job-button:hover {
    background-color: rgba(239, 89, 50, 0.79);
  }
`;

interface Props {
  company: string;
  status: string;
  id: any;
  role: string;
  color: any;
}

const Job = ({ company, status, id, role, color }: Props) => {
  const userInformation = useJob();
  const jobs = userInformation.jobs;
  const setJobss = setJobs();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      job: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // adds delete functionality
  async function deletes(jobid) {
    let copy = JSON.parse(JSON.stringify(jobs));
    copy.map((el) => {
      if (el.id === jobid) {
        copy.splice(copy.indexOf(el), 1);
      }
    });
    setJobss({ ...userInformation, jobs: copy });

    await fetch('/editJob', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobs: copy,
        userId: userInformation._id,
      }),
    });
  }

  return (
    <JobComponent color={color} ref={drag}>
      <div className="job-info">
        <h3> Company: {company}</h3>
        <h3>Role: {role}</h3>
      </div>

      <button
        className="job-button"
        onClick={() => {
          deletes(id);
        }}
      >
        Delete
      </button>
    </JobComponent>
  );
};

export default Job;
