import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { useJob, setJobs } from '../Context/JobContext';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  CARD: 'card',
};

const JobComponent = styled('div')`
  color: green;
  text-align: center;
  border: 1px solid;
  cursor: pointer;
`;

interface Props {
  company: string;
  status: string;
  id: any;
}

const Job = ({ company, status, id }: Props) => {
  // const jobs = useJob();
  // const setJobss = setJobs();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      job: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return <JobComponent ref={drag}>Names: {company}</JobComponent>;
};

export default Job;
