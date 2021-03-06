import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { usePipeline, setPipeline } from '../Context/JobContext';

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
  const userInformation = usePipeline();
  const jobs = userInformation.jobs;
  const setPipelineState = setPipeline();

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any, monitor) => changeStatus(item.job, columnName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  async function changeStatus(id, newStatus) {
    let copy = JSON.parse(JSON.stringify(jobs));

    let filteredList = copy.filter((el) => el.id !== id);
    let filteredItem = copy.filter((el) => el.id === id);
    filteredItem[0].status = newStatus;

    setPipelineState({ ...userInformation, jobs: [...filteredList, ...filteredItem] });
    await fetch('/editJob', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobs: [...filteredList, ...filteredItem],
        userId: userInformation._id,
      }),
    });
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
