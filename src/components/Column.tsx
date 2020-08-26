import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { useJob, setJobs } from '../Context/JobContext';

const Wrapper = styled.div<OtherDataWrapperType>`
  height: 100vh;
  border-left: 2px solid #ece9f2;
  border-top: 2px solid #ece9f2;
  margin-top: 10px;
  width: 20%;
  text-align: center;
  background: ${(props) => (props.lightUp ? 'rgb(250, 300, 255)' : 'rgb(250, 249, 255)')};
  transition: 0.2s;
`;

type OtherDataWrapperType = {
  lightUp?: boolean;
};

const ItemTypes = {
  CARD: 'card',
};

interface props {
  columnName: string;
  children: any;
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
        {columnName} <h5 className="gray">{children.length} Jobs</h5> {children}
      </h1>
    </Wrapper>
  );
};

export default Column;
