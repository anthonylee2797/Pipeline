import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { useJob, setJobs } from '../Context/JobContext';

const Wrapper = styled.div<{ color?: string }>`
  margin: 2%;
  height: 100vh;
  border: 1px solid black;
  width: 15%;
  text-align: center;
  background: ${(prop) => (prop.lightUp ? '#4a4a4a' : 'red')};
  transition: 0.2s;
`;

const ItemTypes = {
  CARD: 'card',
};

interface props {
  columnName: string;
  children: React.ReactNode;
}

const Column = ({ columnName, children }: props) => {
  const jobs = useJob();
  const setJobss = setJobs();

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any, monitor) => changeStatus(item.job, columnName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  function changeStatus(id, newStatus) {
    let copy = JSON.parse(JSON.stringify(jobs));

    let filteredList = copy.filter((el) => el.id !== id);
    let filteredItem = copy.filter((el) => el.id === id);
    filteredItem[0].status = newStatus;

    setJobss([...filteredList, ...filteredItem]);
  }

  return (
    <Wrapper lightUp={isOver} ref={drop}>
      <h1>
        {columnName} {children}
      </h1>
    </Wrapper>
  );
};

export default Column;
