import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { useJob, setJobs } from '../Context/JobContext';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  CARD: 'card',
};

const JobComponent = styled('div')`
  color: black;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  width: 80%;
  padding: 2px;
  background-color: ${(props) => props.color};
  height: 100%;
  margin: 10px auto;
  font-size: 15px;
`;

interface Props {
  company: string;
  status: string;
  id: any;
  role: string;
  color: any;
}

const Job = ({ company, status, id, role, color }: Props) => {
  const jobs = useJob();
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

  async function deletes(jobid) {
    let copy = JSON.parse(JSON.stringify(jobs));
    copy.map((el) => {
      if (el.id === jobid) {
        copy.splice(copy.indexOf(el), 1);
      }
    });
    setJobss(copy);

    await fetch('/editJob', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(copy),
    });
  }

  return (
    <JobComponent color={color} ref={drag}>
      <h3>Company: {company}</h3>
      <h3>Role:{role}</h3>
      <button
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
